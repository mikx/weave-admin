import {Component} from '@angular/core';

import {AboutService} from './about.service';


@Component({
  selector: 'about',
  styleUrls: ['./about.component.css'],
  templateUrl: './about.component.html'
})

export class AboutComponent {
  
  public requestDetails: string = '';
  
  constructor(public service: AboutService) { }
  ngOnInit() {
    this.service.getRequest().subscribe( (data: string) => {this.requestDetails = data;} )
  }

  
}
