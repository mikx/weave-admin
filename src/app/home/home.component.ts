/*eslint-env es_modules, browser*/

import {Inject} from '@angular/core';
import {Component} from '@angular/core';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})

export class HomeComponent {
  constructor(@Inject('CONFIG') private config: any) {
    console.log(config.url);
  }  
}
