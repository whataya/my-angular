/// <reference path="./../../../typings/jquery/jquery.d.ts"/>
import { Component, OnInit } from '@angular/core';

// 服务 Service
import { CommonService } from './../../services/common.service';
import { UtilService } from './../../services/util.service';
import { UserEntity } from './../../entity/user';

@Component({
    selector: 'my-home',
    templateUrl: './../../views/home.html'
})

export class HomeComponent implements OnInit {
    // 定义变量
    serviceUrl: any = {
        userServiceUrl: ''
    };
    
    user: UserEntity;
    constructor(
        private commonService: CommonService,
        private util: UtilService
    ) {
        this.serviceUrl = {
            userServiceUrl: '/users'
        };
    }

    ngOnInit () {
        // jQuery 调用
        // 初始化页面框架
        $('.navbar-minimalize').click(() => $("body").toggleClass("mini-navbar"));
        $('#side-menu').metisMenu();

        // 判断用户是否已登陆
        if (!this.util.getSeesion('user')) {
            this.util.redirect('/login');
        } else {
            this.user = this.util.getSeesion('user');
        }
        
    }

    // 退出登陆
    logout () {
        let id = this.util.getSeesion('user')._id;
        this.commonService.POST(this.serviceUrl.userServiceUrl, this.util.formatPost('user.logout', {id: id}))
            .then(res => {
                this.util.clearSession();
                this.util.redirect('/login');
            });
        
    }

}