import { Component, OnInit } from '@angular/core';
import { MatFormFieldControl, ErrorStateMatcher } from '@angular/material';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import RegisterUser from '../../../models/register-user';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  matcher = new MyErrorStateMatcher();

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  passwordFormControl = new FormControl('',[
    Validators.required,
    Validators.minLength(5)
  ]);

  

  public user: RegisterUser;
  private errorMessage: string;

  constructor(public authService: AuthService, public router: Router) {
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: ''
    }
  }

  ngOnInit() {
  }

  public register(){
    console.log(this.user);
    this.authService.createAccount(this.user);
    this.router.navigate(['/login']);
  }

}
