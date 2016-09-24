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
/// <reference path="./../../../typings/jquery/jquery.d.ts"/>
var core_1 = require('@angular/core');
// 服务 Service
var common_service_1 = require('./../../services/common.service');
var util_service_1 = require('./../../services/util.service');
var HomeComponent = (function () {
    function HomeComponent(commonService, util) {
        this.commonService = commonService;
        this.util = util;
        // 定义变量
        this.serviceUrl = {
            userServiceUrl: ''
        };
        this.serviceUrl = {
            userServiceUrl: '/users'
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        // jQuery 调用
        // 初始化页面框架
        $('.navbar-minimalize').click(function () { return $("body").toggleClass("mini-navbar"); });
        $('#side-menu').metisMenu();
        // 判断用户是否已登陆
        if (!this.util.getSeesion('user')) {
            this.util.redirect('/login');
        }
        else {
            this.user = this.util.getSeesion('user');
        }
    };
    // 退出登陆
    HomeComponent.prototype.logout = function () {
        var _this = this;
        var id = this.util.getSeesion('user')._id;
        this.commonService.POST(this.serviceUrl.userServiceUrl, this.util.formatPost('user.logout', { id: id }))
            .then(function (res) {
            _this.util.clearSession();
            _this.util.redirect('/login');
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'my-home',
            templateUrl: './../../views/home.html'
        }), 
        __metadata('design:paramtypes', [common_service_1.CommonService, util_service_1.UtilService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map