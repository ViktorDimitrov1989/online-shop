import { Injectable } from '@angular/core';
import RegisterUser from '../../models/register-user';
import { AppComponent } from '../../app.component';
import LoginUser from '../../models/login-user';
import { HttpHeaders, HttpClient} from '@angular/common/http';


@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  public createAccount(user: RegisterUser) {
    this.http.post(AppComponent.API_URL + '/user/register', user)
      .subscribe(resp => {
        console.log(resp)
      },
      err => {
        console.log(err);
      });
  }

  public logIn(user: LoginUser) {
    let headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'POST');
    headers.append('Access-Control-Allow-Origin', '*');

   this.http.post(AppComponent.API_URL + "/user/login", user, { withCredentials: true })
    .subscribe((resp) => {
      resp => console.log(resp)
    },
    err => {
      console.log(err);
    })
  }

}
