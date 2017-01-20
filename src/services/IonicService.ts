import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from "./ConfigService";
import { AuthHttp } from 'angular2-jwt';

import * as helper from '../directive/helpers';
import 'rxjs/Rx';


@Injectable()
export class IonicService {
    private headers: Headers;
    constructor(private http: Http, private configService: ConfigService) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    /*
    * 不需要验证的获取数据
    *  res.subscribe(data=>this.aa = data,err=>{if err.status==404});
    *  url:去除前缀的路径 getCustomerCode
    *  params:参数是aaa=223&bbb=2222
    */
    //   apiGet(url, params) {
    //     let res = this.authHttp.get(ConfigSv.apiServiceUrl + '/' + url + '?' + params)
    //       .map(res => res.json())
    //       .catch(this.httpErrorHandle);
    //     return res;
    //   }
    /*
    * 需要验证的提交数据
    * res.subscribe(data=>this.aa = data,err=>{if err.status==404}); 
    * url:去除前缀的路径 getCustomerCode
    * params:json格式数据{data:222,customer:111}
    */
    //   apiAuthPost(url, params) {
    //     let res = this.authHttp.post(ConfigSv.apiAuthServiceUrl + '/' + url, params)
    //       .map(res => res.json())
    //       .catch(this.httpErrorHandle);
    //     return res;
    //   }
    /*
    * 需要验证的获取数据
    *  res.subscribe(data=>this.aa = data,err=>{if err.status==404});
    *  url:去除前缀的路径 getCustomerCode
    *  params:参数是aaa=223&bbb=2222
    */
    //   apiAuthGet(url, params) {
    //     let res = this.authHttp.get(ConfigSv.apiAuthServiceUrl + '/' + url, params)
    //       .map(res => res.json())
    //       .catch(this.httpErrorHandle);
    //     return res;
    //   }
 
    /*
  * 不需要验证的获取数据
  *  res.subscribe(data=>this.aa = data,err=>{if err.status==404});
  *  url:去除前缀的路径 getCustomerCode
  *  params:参数是aaa=223&bbb=2222
  */
    public httpGetNoAuth(url: string,params: string): Observable<any> {

        let options = new RequestOptions({ headers: this.headers });
        let res = this.http.get(this.configService.getHost() + url, options)
            .map((res: Response) => res.json())
            .catch(this.handleError);
        return res;    
    }
    public httpPostNoAuth(url: string, body: any): Observable<any> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        let res = this.http.post(url, body, options)
            .map(res => res.json())
            .catch(this.handleError);
         return res;    
    }

    private handleError(error: Response) {
        console.log(error); 
        return Observable.throw(error.json().error || 'Server Error');
    }
    //   private httpErrorHandle(error: any) { 
    //     let errMsg = (error.message) ? error.message :
    //       error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    //     return Observable.throw(errMsg);
    //   }

}