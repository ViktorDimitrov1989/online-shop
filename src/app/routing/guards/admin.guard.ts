import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app-state';

@Injectable()
export class AdminGuard implements CanActivate {

  private isAdmin: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private store: Store<AppState>
  ) {
    this.store.select(state => state.userState.isAdmin).subscribe(data => this.isAdmin = data);
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    if (!this.isAdmin) {
      this.router.navigateByUrl('');
      this.toastr.warning('Нямате права за тази функционалност!');
    }


    return this.isAdmin;
  }
}
