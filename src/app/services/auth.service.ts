import { Injectable } from '@angular/core';

@Injectable()
export class AuthService  {

  getToken(): string { return "12345"; }

}