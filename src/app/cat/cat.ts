import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {Subscription} from 'rxjs/Subscription';

export class Cat {
  cats: Observable<string> = of('tomtom', 'steak', 'zorro');

  gimmeCats(): Observable<string> {
    return this.cats;
  }

  showCats(): Subscription {
    return this.cats.subscribe(cat => console.log(cat));
  }
}
