"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
// 路由
var app_routing_1 = require('./../router/app.routing');
// 组件
var app_component_1 = require('./../components/app.component');
var home_component_1 = require('./../components/home/home.component');
var login_component_1 = require('./../components/login/login.component');
var register_component_1 = require('./../components/login/register.component');
var dashboard_component_1 = require('./../components/home/dashboard.component');
var profile_component_1 = require('./../components/user/profile.component');
var pay_component_1 = require('./../components/pay/pay.component');
// 服务
var common_service_1 = require('./../services/common.service');
var util_service_1 = require('./../services/util.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                dashboard_component_1.DashboardComponent,
                profile_component_1.ProfileComponent,
                pay_component_1.PayComponent
            ],
            providers: [
                common_service_1.CommonService,
                util_service_1.UtilService
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map