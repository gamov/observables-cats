import {async, ComponentFixture, discardPeriodicTasks, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {OperatorsComponent} from './operators.component';
import {By} from '@angular/platform-browser';

describe('OperatorsComponent', () => {
    let component: OperatorsComponent;
    let fixture: ComponentFixture<OperatorsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OperatorsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OperatorsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it(`should have a button unsubscribe`, fakeAsync(() => {
        const button = fixture.debugElement.query(By.css('button'));
        expect(button.nativeElement).toBeTruthy();
        discardPeriodicTasks();
    }));
    it('should render title in a h1 tag', fakeAsync(() => {
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Output');
        discardPeriodicTasks();
    }));
    it('should have cats names (zipstreams)', fakeAsync(() => {
        const fixture = TestBed.createComponent(OperatorsComponent);
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
