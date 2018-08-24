import {Component} from '@angular/core';
import {Cat} from './cat/cat';
import {NumberInterval} from './interval/numberInterval';
import {combineLatest} from 'rxjs/observable/combineLatest';
import {zip} from 'rxjs/observable/zip';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private intervalComponent = new NumberInterval();
  private catComponent = new Cat();

  constructor() {
    this.showStreams();
    // this.combineStreams();
    // this.zipStreams();
  }

  private showStreams() {
    this.intervalComponent.showIntervals();
    this.catComponent.showCats();
  }

  private combineStreams() {
    combineLatest(this.catComponent.gimmeCats(), this.intervalComponent.gimmeNumbers())
      .subscribe((map) => {
        console.log(map);
      });
    // http://rxmarbles.com/#combineLatest
  }

  private zipStreams() {
    zip(
      this.catComponent.gimmeCats(),
      this.intervalComponent.gimmeNumbers(),
      (cat, number) => number + '. ' + cat)
      .subscribe((combined) => {
        console.log(combined);
      });
    // http://rxmarbles.com/#zip
  }
}
