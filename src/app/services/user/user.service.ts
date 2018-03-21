import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app-state';
import { AppComponent } from '../../app.component';
import { GetUsersAction } from '../../store/user/user-actions';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService,
    public store: Store<AppState>) { }


    public getAllUsers(){
      this.http.get(AppComponent.API_URL + "/admin/users/all", {withCredentials: true})
      .subscribe((respObject: any) => {
        console.log(respObject);
        // this.toastr.succeyss(respObject.message);
        this.store.dispatch(new GetUsersAction(respObject.response));
      },
        (err: any) => {
          console.log(err)
          this.toastr.error(err.error.message);
        })
    }

}
