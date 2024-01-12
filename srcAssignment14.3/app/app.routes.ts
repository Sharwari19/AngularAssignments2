import { Routes } from '@angular/router';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo3Component } from './demo3/demo3.component';

export const routes: Routes = [
    {path : '', component : Demo1Component},
    {path : 'Books', component : Demo2Component},
    {path : '**', component : Demo3Component}
];
