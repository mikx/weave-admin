import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import CustomValidators from '../forms/CustomValidators';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  showInvalidLoginMessage: boolean = false;
  
  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email:    ['', [Validators.required, CustomValidators.validateEmail]],
      password: ['', Validators.required],
    });
  }
  
  submitForm(): void {
    if (this.loginForm.valid) {
      let value = this.loginForm.value;
      this.loginService.login(value.email, value.password).then((data) => this.loginResponse(data));
    } else {
      // ???
    }
  }

    
    /**
     * check response
     */
    loginResponse(data: any): void {
      if (data) {
        this.showInvalidLoginMessage = false;
        localStorage.setItem('session', data.session);
        this.router.navigate(['about']);
      } else {
        this.showInvalidLoginMessage = true;
        setTimeout(() => this.showInvalidLoginMessage = false, 5000);
      }
    }
  
}
