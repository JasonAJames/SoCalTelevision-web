import { provideRouter, RouterConfig } from '@angular/router';
import { AppComponent } from './ts/app.component';
import { AppComponent1 } from './ts/app.component.1';

const routes: RouterConfig = [
    { path:'', redirectTo: 'home'},
    { path: 'home', component: 'home'},
    { path:'about', component: 'AppComponent'},
    { path:'ktla5', component: 'AppComponent1'},
    { path:'**', component: 'AppComponent'}
    

];

export const myRouterProviders = [
    provideRouter(routes)
]

