import {Component} from '@angular/core';

import {AboutService} from './about.service';


@Component({
  selector: 'about',
  styleUrls: ['./about.component.css'],
  templateUrl: './about.component.html'
})

export class AboutComponent {
  
  public info: any = {};
  
  constructor(public service: AboutService) { }
  ngOnInit() {
    this.service.getInfo().subscribe( (data: any) => {this.info = data;} )
  }

  
}
