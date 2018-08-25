import {interval} from "rxjs";

export class NumberInterval {
    numberInterval$ = interval(1000);
    // numberInterval$: Observable<number> = of(3,6,8);

    gimmeNumbers() {
        return this.numberInterval$;
    }

    showIntervals() {
        this.numberInterval$.subscribe(number => console.log(number));
    }
}
