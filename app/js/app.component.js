System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.source = 'https://livestream.com/accounts/9262780/events/3189705/player?width=770&height=433&autoPlay=true&mute=false&customAdTagParameters=Site%3D41641936%26pid%3Don-airlive-streaming';
                    this.stationName = 'KTLA 5';
                    this.title = 'SoCalTelevision';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/ts/views/app.component.html',
                        styleUrls: [
                            'app/ts/css/app.component.css',
                            '/node_modules/bootstrap/dist/css/bootstrap.css',
                            '/bower_components/semantic/dist/components/reset.css',
                            '/bower_components/semantic/dist/components/site.css',
                            '/bower_components/semantic/dist/components/container.css',
                            '/bower_components/semantic/dist/components/grid.css',
                            '/bower_components/semantic/dist/components/header.css',
                            '/bower_components/semantic/dist/components/image.css',
                            '/bower_components/semantic/dist/components/menu.css',
                            '/bower_components/semantic/dist/components/divider.css',
                            '/bower_components/semantic/dist/components/dropdown.css',
                            'bower_components/semantic/dist/components/segment.css',
                            '/bower_components/semantic/dist/components/button.css',
                            'bower_components/semantic/dist/components/list.css',
                            '/bower_components/semantic/dist/components/icon.css',
                            '/bower_components/semantic/dist/components/sidebar.css',
                            '/bower_components/semantic/dist/components/transition.css',
                        ],
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map