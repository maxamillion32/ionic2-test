import { Injectable } from '@angular/core';
import { Http, Response, Headers ,RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from "./ConfigService";
import { AuthHttp } from 'angular2-jwt';
import * as helper from '../directive/helpers';
import 'rxjs/Rx';


@Injectable()
export class IonicService {
    private headers: Headers;
    constructor(private http: Http , private configService: ConfigService) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
 
    public httpGetNoAuth(url: string): Observable<any>
    { 
        
        let options = new RequestOptions({ headers: this.headers });
        return this.http.get(this.configService.getHost()+ url, options)
            .map((res: Response) => res.json().results)
            .catch(this.handleError);
    }
    public httpPostNoAuth(url: string, body: any) : Observable<any>
    {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, body, options)
            .map(res => res.json())
            .catch(this.handleError);
    }
     
    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server Error');
    }


}