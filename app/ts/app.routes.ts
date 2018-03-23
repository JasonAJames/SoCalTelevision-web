import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from './home.component';
import { AppComponent } from './app.component';
import { AppComponent1 } from './app.component.1';

const routes: RouterConfig = [
    { path:'', redirectTo: 'home'},
    { path: 'home', component: 'HomeComponent'},
    { path:'about', component: 'AppComponent'},
    { path:'ktla5', component: 'AppComponent1'},
    { path:'**', component: 'HomeComponent'}
    

];

export const myRouterProviders = [
    provideRouter(routes)
]

