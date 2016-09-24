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
/// <reference path="./../../typings/jquery/jquery.d.ts"/>
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var UtilService = (function () {
    // 构造方法
    function UtilService(router) {
        this.router = router;
    }
    // 路由跳转
    UtilService.prototype.redirect = function (link, id) {
        !id ? this.router.navigate([link])
            : this.router.navigate([link, id]);
    };
    UtilService.prototype.prompt = function (upMsg, downMsg, isSuccess, showMethod, timeOut, closeButton) {
        if (showMethod === void 0) { showMethod = 'slideDown'; }
        if (timeOut === void 0) { timeOut = 3000; }
        if (closeButton === void 0) { closeButton = true; }
        toastr.options = {
            closeButton: closeButton,
            progressBar: true,
            showMethod: showMethod,
            timeOut: timeOut
        };
        toastr.success(downMsg, upMsg);
    };
    UtilService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router])
    ], UtilService);
    return UtilService;
}());
exports.UtilService = UtilService;
//# sourceMappingURL=uti.service.js.map