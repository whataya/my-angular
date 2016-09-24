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
var router_1 = require('@angular/router');
// 服务 Service
var common_service_1 = require('../../services/common.service');
var util_service_1 = require('./../../services/util.service');
var user_1 = require('./../../entity/user');
var LoginComponent = (function () {
    function LoginComponent(router, commonService, util) {
        this.router = router;
        this.commonService = commonService;
        this.util = util;
        this.serviceUrl = '/users';
        this.user = new user_1.UserEntity('', '');
    }
    // 获取用户输入
    LoginComponent.prototype.onKey = function (param) { this.user[param.name] = param.value; };
    // 提交
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var _a = this.user, username = _a.username, password = _a.password, action = 'user.login';
        if (!username || !password) {
            !username ? this.util.prompt('用户名不能为空', '请重新输入', 'error')
                : this.util.prompt('口令不能为空', '请重新输入', 'error');
            return;
        }
        this.commonService.POST(this.serviceUrl, this.util.formatPost(action, this.user))
            .then(function (res) {
            if (res.success) {
                _this.util.prompt(res.msg, '', 'success');
                _this.util.setSession('user', JSON.stringify(res.data));
                _this.util.redirect('/home');
            }
            else {
                _this.util.prompt(res.msg, res.err, 'error');
                return;
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'my-login',
            templateUrl: './../../views/login/login.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, common_service_1.CommonService, util_service_1.UtilService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map