import {TestBed, async, fakeAsync, tick, discardPeriodicTasks} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {By} from "@angular/platform-browser";

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
        }).compileComponents();
    }));


    it('should create the app', fakeAsync(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
        discardPeriodicTasks();
    }));
    it(`should have a button unsubscribe`, fakeAsync(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const button = fixture.debugElement.query(By.css('button'));
        expect(button.nativeElement).toBeTruthy();
        discardPeriodicTasks();
    }));
    it('should render title in a h1 tag', fakeAsync(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Output');
        discardPeriodicTasks();
    }));
    it('should have cats names (zipstreams)', fakeAsync(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        tick(1000);
        fixture.detectChanges();
        expect(compiled.querySelector('ol').textContent).toContain('tomtom');
        tick(1000);
        fixture.detectChanges();
        expect(compiled.querySelector('ol').textContent).toContain('steak');
        tick(1000);
        fixture.detectChanges();
        expect(compiled.querySelector('ol').textContent).toContain('zorro');
        discardPeriodicTasks();
    }));
});
