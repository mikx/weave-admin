import { Inject, Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  
  constructor(@Inject('CONFIG') private config: any, private http: Http) {}
  
  private base = this.config.base;
  
  getPromise(path: string): Promise<any> {
    return new Promise((resolve) => {
      let success = (data: any) => { if (data.session) resolve(data) }
      let error = (e: any) => { resolve(null) }
      this.get(path).subscribe(success, error);
    });
  }

  
  get(path: string, args: RequestOptionsArgs = {}): Observable<any> {
      let options = new RequestOptions(Object.assign({withCredentials: true }, args));
      let url = `${this.base}/${path}`;
      return this.http.get(url, options).map((res) => res.json())
  }
  
  
  post(path: string, body: any): Promise<any> {
    return new Promise((resolve) => {
      let success = (data: any) => { if (data.session) resolve(data) }
      let error = (e: any) => { resolve(null) }
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers, withCredentials: true });
      let url = `${this.base}/${path}`;
      this.http.post(url, JSON.stringify(body), options).map((res) => res.json()).subscribe(success, error);
    });
  }
    
}
