"use strict";
var router_1 = require('@angular/router');
// 组件
var home_component_1 = require('./../components/home/home.component');
var login_component_1 = require('./../components/login/login.component');
var register_component_1 = require('./../components/login/register.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map