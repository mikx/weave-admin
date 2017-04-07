/*globals private */

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class AboutService {
  
  constructor(private http: Http) {}

  getRequest(): Observable<string> {
    return this.makeRequest(`info/request`);
  }

  private makeRequest(path: string): Observable<string> {
    let headers = new Headers();
    let options = new RequestOptions({ headers: headers, withCredentials: true });
    let url = `http://dev.async.weave.io/${path}`;
    return this.http.get(url, options).map((res) => res.text());
  }
  
}
