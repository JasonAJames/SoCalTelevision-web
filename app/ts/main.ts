import {bootstrap}    from 'angular2/platform/browser';
import {myRouterProviders} from '../app.routes';
import {AppComponent} from './app.component';

bootstrap(AppComponent, [myRouterProviders]);