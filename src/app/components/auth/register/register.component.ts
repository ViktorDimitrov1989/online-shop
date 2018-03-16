import { Component, OnInit } from '@angular/core';
import { MatFormFieldControl, ErrorStateMatcher } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import RegisterUser from '../../../models/register-user';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { FormErrorStateMatcher } from '../../../utils/error-state-matcher';

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
    Validators.pattern("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$")
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

  public user: RegisterUser;
  private errorMessage: string;

  public isPasswordSame: boolean;

  constructor(public authService: AuthService, public router: Router) {
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
    console.log(this.user);
    this.authService.createAccount(this.user);
    this.router.navigate(['/login']);
  }

}
