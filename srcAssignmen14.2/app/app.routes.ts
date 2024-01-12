import { Routes } from '@angular/router';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';

export const routes: Routes = [

    {path : 'Technologies', component : Demo1Component},
    {path : 'Books', component :  Demo2Component}
];
