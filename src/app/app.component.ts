import {Component} from '@angular/core';
import {Cat} from './cat/cat';
import {NumberInterval} from './interval/numberInterval';
import {combineLatest, Subscription, zip} from "rxjs";
import {filter, map, tap} from "rxjs/operators";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    private intervalComponent = new NumberInterval();
    private catComponent = new Cat();

    stringOutput: any[] = [];
    currentSubscription: Subscription;

    constructor() {
        // this.showStreams();
        this.combineStreams();
        // this.zipStreams();
    }

    private showStreams() {
        this.intervalComponent.showIntervals();
        this.catComponent.showCats();
    }

    private combineStreams() {
        this.currentSubscription = combineLatest(
            this.catComponent.gimmeCats(),
            this.intervalComponent.gimmeNumbers()
        ).pipe(
            tap((catsAndNumbers) => console.log(catsAndNumbers)),
            filter((catsAndNumbers) => catsAndNumbers[1] < 5),
        ).subscribe((map) => {
            // console.log(map);
            this.stringOutput.push(map);
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
        this.currentSubscription.unsubscribe();
    }
}
