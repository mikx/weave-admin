/*globals environment */
/*eslint-env es_modules, browser*/

import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Http, HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';

import { ExtendedHttpService } from './services/extended-http.service';
import { ApiService } from './services/api.service';
import { GithubService } from './github/shared/github.service';

import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { OrgComponent } from './org/org.component';

import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LoginComponent,
    RepoBrowserComponent,
    RepoListComponent,
    RepoDetailComponent,
    HomeComponent,
    OrgComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
    NgbModule.forRoot()
  ],
  providers: [
    ApiService,
    GithubService,
    {provide: Http, useClass: ExtendedHttpService },
    {provide: 'CONFIG', useValue: environment }
  ],
  bootstrap: [ AppComponent ]
})

  
export class AppModule {

}
