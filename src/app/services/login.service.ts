import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
  constructor(private http: Http) {}
  
  login(email: string, pass: string): Promise<any> {
    return new Promise((resolve) => {
      let success = (data: any) => { if (data.session) resolve(data) }
      let error = (e: any) => { resolve(null) }
      this.makeRequest(email, pass).subscribe(success, error);
    });
  }
  
  private makeRequest(email: string, pass: string): Observable<string> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let data = { name: email, token: pass }
    let url = `http://dev.async.weave.io/login`;
    return this.http.post(url, JSON.stringify(data), options).map((res) => res.json());
  }
  
}