/*eslint-env es_modules */

import { Injectable } from '@angular/core';
import { Request, XHRBackend, RequestOptions, Response, Http, RequestOptionsArgs, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ExtendedHttpService extends Http {

  constructor(backend: XHRBackend, defaultOptions: RequestOptions, private router: Router) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    if (typeof url === 'string') {
      if (!options) { options = { headers: new Headers() }; }
      this.setHeaders(options);
    } else {
      this.setHeaders(url);
    }
    return super.request(url, options).catch(this.catchErrors());
  }

  private catchErrors() {
    return (res: Response) => {
      if (res.status === 401 || res.status === 403) {
        this.router.navigate(['login']);
      }
      return Observable.throw(res);
    };
  }

  private setHeaders(obj: Request | RequestOptionsArgs) {
    //obj.headers.set('Token', this.authService.getToken());
  }
}