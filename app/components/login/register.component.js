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
var router_1 = require('@angular/router');
// 服务 Service
var common_service_1 = require('../../services/common.service');
var util_service_1 = require('./../../services/util.service');
// 类
var user_1 = require('../../entity/user');
var RegisterComponent = (function () {
    function RegisterComponent(router, commonService, util) {
        this.router = router;
        this.commonService = commonService;
        this.util = util;
        // 初始化变量
        this.serviceUrl = '/users';
        this.user = new user_1.UserEntity('', '', '');
    }
    RegisterComponent.prototype.ngOnInit = function () {
        $('.i-checks').iCheck({
            checkboxClass: 'icheckbox_square-green',
            radioClass: 'iradio_square-green',
        });
    };
    // 获取用户输入
    RegisterComponent.prototype.onKey = function (param) { this.user[param.name] = param.value; };
    // 提交
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        var _a = this.user, username = _a.username, email = _a.email, password = _a.password, action = 'user.register';
        // 验证输入
        if (!username) {
            return this.util.prompt('用户名不能为空', '请重新输入', 'error');
        }
        if (username.length < 6 || username.length > 16) {
            return this.util.prompt('用户名介于6~10位之间', '请重新输入', 'error');
        }
        if (!password) {
            return this.util.prompt('口令不能为空', '请重新输入', 'error');
        }
        if (password.length < 6) {
            return this.util.prompt('密码长度不能少于6位', '请重新输入', 'error');
        }
        if (!email) {
            return this.util.prompt('邮箱不能为空', '请重新输入', 'error');
        }
        this.commonService.POST(this.serviceUrl, this.util.formatPost(action, this.user))
            .then(function (res) {
            if (res.success) {
                _this.util.prompt(res.msg, '', 'success');
                _this.util.redirect('/login');
            }
            else {
                _this.util.prompt(res.msg, '请重新输入', 'error');
                return;
            }
        });
    };
    RegisterComponent.prototype.login = function () { this.util.redirect('/login'); };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'my-register',
            templateUrl: './../../views/login/register.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, common_service_1.CommonService, util_service_1.UtilService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map