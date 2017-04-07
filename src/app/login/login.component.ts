import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import CustomValidators from '../forms/CustomValidators';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private loginService: LoginService) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email:    ['', [Validators.required, CustomValidators.validateEmail]],
      password: ['', Validators.required],
    });
  }
  
  submitForm(): void {
    let value = this.loginForm.value;
    console.log(value);
    this.loginService.login(value.email, value.password).then((data) => console.log(data));
  }
  
}
