/// <reference path="./../../../typings/jquery/jquery.d.ts"/>
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// 服务 Service
import { CommonService } from '../../services/common.service';
import { UtilService } from './../../services/util.service';

// 类
import { UserEntity } from '../../entity/user';

@Component({
    selector: 'my-register',
    templateUrl: './../../views/login/register.html' 
})

export class RegisterComponent implements OnInit {
    // 定义变量
    serviceUrl: string;
    user: UserEntity;
    constructor(
        private router: Router,
        private commonService: CommonService,
        private util: UtilService
    ) {
        // 初始化变量
        this.serviceUrl = '/users';
        this.user = new UserEntity('', '', '')
    }

    ngOnInit() {
        $('.i-checks').iCheck({
            checkboxClass: 'icheckbox_square-green',
            radioClass: 'iradio_square-green',
        });
    }

    // 获取用户输入
    onKey (param: any) { this.user[param.name] = param.value; }

    // 提交
    onSubmit () {
        let { username, email, password } = this.user,
            action = 'user.register';
        // 验证输入
        if (!username) { return this.util.prompt('用户名不能为空', '请重新输入', 'error'); }
        if (username.length < 6 || username.length > 16) {return this.util.prompt('用户名介于6~10位之间', '请重新输入', 'error'); }
        if (!password) { return this.util.prompt('口令不能为空', '请重新输入', 'error'); }
        if (password.length < 6) {return this.util.prompt('密码长度不能少于6位', '请重新输入', 'error'); }
        if (!email) { return this.util.prompt('邮箱不能为空', '请重新输入', 'error'); }
        
        this.commonService.POST(this.serviceUrl, this.util.formatPost(action, this.user))
            .then(res => {
                if (res.success) {
                    this.util.prompt(res.msg, '', 'success');
                    this.util.redirect('/login');
                } else {
                    this.util.prompt(res.msg, '请重新输入', 'error');
                    return;
                }
            });
    }

    login () { this.util.redirect('/login'); }
}