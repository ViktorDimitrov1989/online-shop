import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app-state';

@Injectable()
export class LoggedGuard implements CanActivate {

  private isAuthenticated: boolean;

  private isAdmin: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private store: Store<AppState>
  ) {
    this.store.select(state => state.userState.authenticated).subscribe(data => this.isAuthenticated = data);

    this.store.select(state => state.userState.isAdmin).subscribe(data => this.isAdmin = data);
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {


    if (!this.isAuthenticated) {
      this.router.navigateByUrl('');
      this.toastr.warning('Нужна ви е регистрация за тази функционалност!');
    }

    return this.isAuthenticated;
  }
}
