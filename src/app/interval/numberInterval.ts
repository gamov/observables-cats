import {interval} from 'rxjs/observable/interval';

export class NumberInterval {
  intervals = interval(1000);

  gimmeNumbers() {
    return this.intervals;
  }

  showIntervals() {
    this.intervals.subscribe(number => console.log(number));
  }
}
