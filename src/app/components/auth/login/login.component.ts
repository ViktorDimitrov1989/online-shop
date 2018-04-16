import { Component, OnInit } from '@angular/core';
import { MatFormFieldControl, ErrorStateMatcher } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import LoginUser from '../../../models/login-user';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { AppState } from '../../../store/app-state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [{ provide: MatFormFieldControl, useExisting: LoginComponent }]
})
export class LoginComponent implements OnInit {

  public user: LoginUser;

  public loggedUser: any;

  private errorMessage: string;

  private authenticated: Observable<any>;

  

  constructor(
    public authService: AuthService,
    public router: Router,
    private store: Store<AppState>
  ) {
    this.authenticated = this.store.select(state => {
      this.loggedUser = state.userState.loggedUser
    });

    this.user = {
      email: '',
      password: '',
      rememberMe: false
    }

  }

  ngOnInit() {

  }

  login() {
    this.authService.logIn(this.user);
  }

}
