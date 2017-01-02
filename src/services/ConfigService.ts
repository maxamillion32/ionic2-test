import {Injectable} from '@angular/core';

@Injectable()
export class ConfigService {
  hostURL:string = "http://localhost/basic/web/";

  constructor() {

  }

  getHost() {
    return this.hostURL;
  }
}