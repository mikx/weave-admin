import {Component}  from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ApiService} from '../services/api.service';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-org',
  templateUrl: './org.component.html',
  styles: [`.form-control { width: 300px; }`]
})


export class OrgComponent {

  constructor(private api: ApiService) {}
  
  public model: any;

  public search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .flatMap(term => term.length < 2 ? Observable.of([]) : this.api.get('info/org', {search: {query: term}})
      .map(orgs => orgs.map((org: any) => org.name)));
}
