import {Observable, of, Subscription} from 'rxjs';

export class Cat {
    cats$: Observable<string> = of('tomtom', 'steak', 'zorro');

    gimmeCats(): Observable<string> {
        return this.cats$;
    }

    showCats(): Subscription {
        return this.cats$.subscribe(cat => console.log(cat));
    }
}
