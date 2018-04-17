import { Component, OnInit } from '@angular/core';
import { MatFormFieldControl, ErrorStateMatcher } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import RegisterUser from '../../../models/register-user';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { FormErrorStateMatcher } from '../../../utils/error-state-matcher';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app-state';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  matcher = new FormErrorStateMatcher();

  firstNameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ])

  lastNameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ])

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.pattern("^([a-zA-Z0-9@*#]{8,15})$")
  ]);

  confirmPasswordFormControl = new FormControl('', [
    Validators.required
  ]);

  phoneFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern("^([0-9]+){9}$")
  ])

  cityFormControl = new FormControl('', [
    Validators.required
  ])

  adressFormControl = new FormControl('', [
    Validators.required
  ])

  streetFormControl = new FormControl('', [
    Validators.required
  ])

  public registerForm = new FormGroup({
    firstName: this.firstNameFormControl,
    lastName: this.lastNameFormControl,
    email: this.emailFormControl,
    password: this.passwordFormControl,
    confirmPassword: this.confirmPasswordFormControl,
    phoneNumber: this.phoneFormControl,
    city: this.cityFormControl,
    adress: this.adressFormControl,
    street: this.streetFormControl  
  })

  public user: RegisterUser;
  
  private errorMessage: string;

  public isPasswordSame: boolean;

  private authenticated: Observable<any>;

  constructor(
    public authService: AuthService, 
    public router: Router,
    private store: Store<AppState>
  ) {

    this.authenticated = this.store.select(state => state.userState.authenticated);

    this.user = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
      city: '',
      street: '',
      adress: '',
      postCode: '',
    }

    this.passwordFormControl.valueChanges.subscribe(data => {
      this.isPasswordSame = data == this.confirmPasswordFormControl.value;
    })

    this.confirmPasswordFormControl.valueChanges.subscribe(data => {
      this.isPasswordSame = data == this.passwordFormControl.value;
    })

  }

  ngOnInit() {
  }

  public register() {
    this.authService.createAccount(this.user);

    // this.authenticated.subscribe((value) => {
    //   if(value){
        
    //   }else{
    //     this.user.password = '';
    //     this.user.confirmPassword = '';
    //   }
    // });
      
  }

}
