import {bootstrap}    from 'angular2/platform/browser';
import {myRouterProviders} from './app.routes';
import {HomeComponent} from './home.component';
import {AppComponent} from './app.component';
import {AppComponent1} from './app.component.1';

bootstrap(AppComponent, [myRouterProviders]);