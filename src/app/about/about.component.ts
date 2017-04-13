/*eslint-env es_modules */

import {Component} from '@angular/core';

import {ApiService} from '../services/api.service';


@Component({
  selector: 'app-about',
  styleUrls: ['./about.component.css'],
  templateUrl: './about.component.html'
})

export class AboutComponent {
  
  public info: any = { user: {}, orgs: [] };
  
  constructor(public api: ApiService) { }
  
  ngOnInit() {
    this.api.get('info/user').subscribe((data: any) => { this.info = data; });
  }

  
}
