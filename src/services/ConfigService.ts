import {Injectable} from 'angular2/core';

@Injectable()
export class ConfigService {
  hostURL:string = "http://localhost";

  constructor() {

  }

  getHost() {
    return this.hostURL;
  }
}