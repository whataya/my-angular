import { Component } from '@angular/core';
import { Router } from '@angular/router';

// 服务 Service
import { CommonService } from '../../services/common.service';
import { UtilService } from './../../services/util.service';
import { UserEntity } from './../../entity/user';

@Component({
    selector: 'my-login',
    templateUrl: './../../views/login/login.html'
})

export class LoginComponent {
    // 定义变量
    serviceUrl: string;
    user: UserEntity;
    constructor(
        private router: Router,
        private commonService: CommonService,
        private util: UtilService
    ) {
        this.serviceUrl = '/users';
        this.user = new UserEntity('', '')
    }

    // 获取用户输入
    onKey (param: any) { this.user[param.name] = param.value; }

    // 提交
    onSubmit () {
        let { username, password } = this.user,
            action = 'user.login';
        if (!username || !password) {
            !username ? this.util.prompt('用户名不能为空', '请重新输入', 'error')
                      : this.util.prompt('口令不能为空', '请重新输入', 'error');
            return;
        }

        this.commonService.POST(this.serviceUrl, this.util.formatPost(action, this.user))
            .then(res => {
                if (res.success) {
                    this.util.prompt(res.msg, '', 'success');
                    this.util.setSession('user', JSON.stringify(res.data));
                    this.util.redirect('/home');
                } else {
                    this.util.prompt(res.msg, res.err, 'error');
                    return;
                }
            });
    }
}