import { Component, OnInit } from '@angular/core';
import { MatFormFieldControl, ErrorStateMatcher } from '@angular/material';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import LoginUser from '../../../models/login-user';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [{ provide: MatFormFieldControl, useExisting: LoginComponent }]
})
export class LoginComponent implements OnInit {

  public user: LoginUser;
  private errorMessage: string;

  constructor(public authService: AuthService, public router: Router) { 
    this.user = {
      email: '',
      password: ''
    }

  }

  ngOnInit() {
    
  }

  private initJquery() {
  }

  login() {
    this.authService.logIn(this.user);
    //this.router.navigate(['/']);
  }

}
