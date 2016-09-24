"use strict";
var router_1 = require('@angular/router');
// 组件
var home_component_1 = require('./../components/home/home.component');
var login_component_1 = require('./../components/login/login.component');
var register_component_1 = require('./../components/login/register.component');
var dashboard_component_1 = require('./../components/home/dashboard.component');
var profile_component_1 = require('./../components/user/profile.component');
var pay_component_1 = require('./../components/pay/pay.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent,
        children: [
            {
                path: '',
                component: dashboard_component_1.DashboardComponent
            },
            {
                path: 'profile',
                component: profile_component_1.ProfileComponent
            },
            {
                path: 'pay',
                component: pay_component_1.PayComponent
            }
        ]
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