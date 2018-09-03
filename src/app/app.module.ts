import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { OperatorsComponent } from './operators/operators.component';

const appRoutes: Routes = [
    {path: '', component: AppComponent},
    {path: 'operators', component: OperatorsComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        OperatorsComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
