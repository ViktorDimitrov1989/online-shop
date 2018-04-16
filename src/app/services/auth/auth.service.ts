import { Injectable } from '@angular/core';
import RegisterUser from '../../models/register-user';
import { AppComponent } from '../../app.component';
import LoginUser from '../../models/login-user';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserState } from '../../store/user/user-state';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app-state';
import { LoginUserAction, RegisterUserAction, LogoutUserAction } from '../../store/user/user-actions';
import { RequestOptions } from '@angular/http';
import { BasketService } from '../basket/basket.service';


@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService,
    public store: Store<AppState>,
    public basketService: BasketService
  ) {
  }

  public createAccount(user: RegisterUser) {

    this.http.post(AppComponent.API_URL + '/auth/register', user)
      .subscribe((respObject: any) => {
        this.toastr.success(respObject.message);
        this.store.dispatch(new RegisterUserAction(respObject.response))
      },
        err => {
          this.toastr.error(err.error.message);
        });

  }

  public logIn(user: LoginUser) {

    this.http.post(AppComponent.API_URL + "/auth/login", user, { withCredentials: true })
      .subscribe((respObject: any) => {
        this.toastr.success(respObject.message);
        this.basketService.getBasketByUserId(respObject.response.id);
        this.store.dispatch(new LoginUserAction(respObject.response, this.checkAdmin(respObject.response.authorities)));
        sessionStorage.setItem('isAdmin', (respObject.response.authorities.indexOf('ROLE_ADMIN') > -1) + "");
        this.router.navigate(['/']);
      },
        (err: any) => {
          this.toastr.error(err.error.message);
        })
  }

  public logout() {

    this.http.get(AppComponent.API_URL + "/auth/logout", { withCredentials: true })
      .subscribe((respObject: any) => {
        this.toastr.success(respObject.message)
        this.router.navigateByUrl('/');
        this.store.dispatch(new LogoutUserAction())
      },
        (err: any) => {
          this.toastr.error(err.error.message);
        })
  }

  private checkAdmin(roles: any): boolean {
    return roles.indexOf('ROLE_ADMIN') > -1;
  }

}
