import {Component} from '@angular/core';
import {NumberInterval} from '../interval/numberInterval';
import {Cat} from '../cat/cat';
import {asyncScheduler, combineLatest, Subject, zip} from 'rxjs';
import {filter, map, observeOn, subscribeOn, takeUntil, tap} from 'rxjs/operators';

@Component({
    selector: 'app-operators',
    templateUrl: './operators.component.html',
    styleUrls: ['./operators.component.css']
})
export class OperatorsComponent {
    private intervalComponent = new NumberInterval();
    private catComponent = new Cat();

    stringOutput: any[] = [];
    unsubscriber$ = new Subject();

    constructor() {
        // this.showStreams();
        // this.combineStreams();
        this.zipStreams();
    }

    private showStreams() {
        this.intervalComponent.showIntervals();
        this.catComponent.showCats();
    }

    private combineStreams() {
        combineLatest(
            this.catComponent.gimmeCats(),
            this.intervalComponent.gimmeNumbers()
        ).pipe(
            tap((catsAndNumbers) => console.log(catsAndNumbers)),
            filter((catsAndNumbers) => catsAndNumbers[1] < 5),
            takeUntil(this.unsubscriber$),
            observeOn(asyncScheduler),
            subscribeOn(asyncScheduler)
        ).subscribe((next) => {
            // console.log(map);
            this.stringOutput.push(next);
            // console.log(this.stringOutput);
        });
        // http://rxmarbles.com/#combineLatest
    }

    private zipStreams() {
        zip(
            this.catComponent.gimmeCats(),
            this.intervalComponent.gimmeNumbers()
            // ,(cat: string, number: number) => '>' +number + '<.>' + cat + '<'
        ).pipe(
            tap((catsAndNumbers) => console.log(catsAndNumbers)),
            map((catsAndNumbers: any[]) => catsAndNumbers[0] + ' + ' + catsAndNumbers[1])
        )
        // map((cat: string, index: number) => index+ '. ' + cat))
            .subscribe((catsAndNumbers) => {
                // console.log(catsAndNumbers);
                this.stringOutput.push(catsAndNumbers);
            });
        // http://rxmarbles.com/#zip
    }

    unsubscribe() {
        this.unsubscriber$.next();
        this.unsubscriber$.complete();
    }
}
