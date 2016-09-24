/// <reference path="./../../typings/jquery/jquery.d.ts"/>
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class UtilService {
    // 构造方法
    constructor(private router: Router) {}
    
    // 路由跳转
    redirect (link: string, id?: number) {
        !id ? this.router.navigate([link])
            : this.router.navigate([link, id]);
    }
    
    // 弹出提示框
    prompt (upMsg: string, downMsg: string, isSuccess: string, showMethod = 'slideDown', timeOut = 3000, closeButton = true) {
        toastr.options = {
            closeButton: closeButton,
            progressBar: true,
            showMethod: showMethod,
            timeOut: timeOut
        };
        switch (isSuccess) {
            case 'warning':
                toastr.warning(downMsg, upMsg);
                break;
            case 'error':
                toastr.error(downMsg, upMsg);
                break;
            default:
                toastr.success(downMsg, upMsg);              
                break;
        }
        
    }

    // 处理POST数据
    formatPost (action: string, data: Object) {
        return {
            action: action,
            data: data
        };
    }

    // 设置session
    setSession (str: string, session: string) {
        localStorage.setItem(str, session);
    }

    // 获取session
    getSeesion (str: string) {
        return localStorage.getItem(str);
    }

    // 清除session
    clearSession () {
        localStorage.clear();
    }
   
}