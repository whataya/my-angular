import { Component, OnInit } from '@angular/core';

// 服务 Service
import { CommonService } from './../../services/common.service';
import { UtilService } from './../../services/util.service';
import { UserEntity } from './../../entity/user';

@Component({
    selector: '',
    templateUrl: './../../../views/user/profile.html'
})

export class ProfileComponent implements OnInit {
    // 定义变量
    user: UserEntity;
    constructor (
        private util: UtilService
    ) {
        
    }
    ngOnInit () {
        // 初始化session信息
        this.user = this.util.getSeesion('user');
    }
}