/*eslint-env es_modules */

import {Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

import {AboutService} from './about.service';


@Component({
  selector: 'about',
  styleUrls: ['./about.component.css'],
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AboutComponent {
  
  public info: any = { user: {}, orgs: [] };
  
  constructor(private changeDetector: ChangeDetectorRef, public service: AboutService) { }
  
  ngOnInit() {
    this.service.getInfo().subscribe( (data: any) => {
      this.info = data;
      this.changeDetector.markForCheck();
    })
  }

  
}
