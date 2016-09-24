import {Json} from '@angular/compiler/src/facade/lang';
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CommonService {
    // 构造方法，注入Service
    constructor(
        private http: Http
    ) {}

    // 定义私有变量
    private loginUrl = '/data';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });

    // 返回数据处理
    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }

    // 错误处理
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    // POST 公共方法
    POST(url: string, data: Object): Promise<any> {
        return this.http
            .post(this.loginUrl + url, JSON.stringify(data), this.options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }
}