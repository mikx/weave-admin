/*globals private */

import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';




const response = `<table><tbody>
<tr><td>/user/messages_count_2</td><td>48</td><td>48.0</td><td>0.048 / 1</td></tr>
<tr><td>/info/request</td><td>30</td><td>1.2919254658385093</td><td>0.208 / 161</td></tr>
<tr><td>/user/notifications</td><td>223</td><td>223.0</td><td>0.223 / 1</td></tr>
<tr><td>/ping</td><td>4</td><td>2.0</td><td>0.004 / 2</td></tr>
<tr><td>/info/message</td><td>37</td><td>1.81875</td><td>0.291 / 160</td></tr>
<tr><td>/user/messages_count</td><td>235</td><td>78.6</td><td>0.393 / 5</td></tr>
<tr><td>/info</td><td>29</td><td>4.666666666666667</td><td>0.042 / 9</td></tr>
<tr><td>/login</td><td>55</td><td>18.666666666666668</td><td>0.056 / 3</td></tr>
<tr><td>/org/position</td><td>328</td><td>120.2</td><td>0.601 / 5</td></tr>
<tr><td>/org/users/session</td><td>596</td><td>128.4</td><td>0.642 / 5</td></tr>
<tr><td>/healthy</td><td>127</td><td>0.48027210884353744</td><td>2.118 / 4410</td></tr>
</tbody></table>`;

@Injectable()
export class AboutService {
  
  constructor(private http: Http) {}

  getRequest(): Observable<string> {
    return this.makeRequest(`info/request`);
  }

  private makeRequest(path: string): Observable<string> {
    let url = `http://dev.async.weave.io/${ path }`;
    return this.http.get(url).map((res) => res.text());
  }
  
}
