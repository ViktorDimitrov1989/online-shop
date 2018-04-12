import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app-state';
import { AppComponent } from '../../app.component';
import { GetBasketAction } from '../../store/basket/basket-actions';

@Injectable()
export class BasketService {

  constructor(private http: HttpClient,
    private router: Router,
    private toastr: ToastrService,
    public store: Store<AppState>) { }


  getBasketByUserId(userId: number) {
    this.http.get(AppComponent.API_URL + "/cart/get/" + userId, { withCredentials: true })
      .subscribe((respObject: any) => {
        console.log(respObject);
        this.store.dispatch(new GetBasketAction(respObject.response.articles));
      },
        (err: any) => {
          this.toastr.error(err.error.message);
        })
  }


}
