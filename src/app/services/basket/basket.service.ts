import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app-state';
import { AppComponent } from '../../app.component';
import { GetBasketAction, ClearBasketAction, AddBasketArticleAction, IncreaseBasketArticleQuantityAction, DecreaseBasketArticleQuantityAction, RemoveBasketArticleAction } from '../../store/basket/basket-actions';

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
        this.store.dispatch(new GetBasketAction(respObject.response));
      },
        (err: any) => {
          this.toastr.error(err.error.message);
        })
  }

  clearBasketById(basketId: number) {
    this.http.post(AppComponent.API_URL + "/cart/clear/" + basketId, {}, { withCredentials: true })
      .subscribe((respObject: any) => {
        this.toastr.success(respObject.message);
        this.store.dispatch(new ClearBasketAction(respObject.response));
      },
        (err: any) => {
          this.toastr.error(err.error.message);
        })
  }

  addBasketArticle(basketArticleModel: any) {
    this.http.post(AppComponent.API_URL + "/cart/addArticle/", basketArticleModel, { withCredentials: true })
      .subscribe((respObject: any) => {
        this.toastr.success(respObject.message);
        this.store.dispatch(new AddBasketArticleAction(respObject.response));
      },
        (err: any) => {
          this.toastr.error(err.error.message);
        })
  }

  increaseShoppingCartArticleQuantity(articleId: number) {
    this.http.post(AppComponent.API_URL + "/cartArticle/increase/" + articleId, {}, { withCredentials: true })
      .subscribe((respObject: any) => {
        this.toastr.success(respObject.message);
        this.store.dispatch(new IncreaseBasketArticleQuantityAction(respObject.response));
      },
        (err: any) => {
          this.toastr.error(err.error.message);
        })
  }

  decreaseShoppingCartArticleQuantity(articleId: number) {
    this.http.post(AppComponent.API_URL + "/cartArticle/decrease/" + articleId, {}, { withCredentials: true })
      .subscribe((respObject: any) => {
        this.toastr.success(respObject.message);
        this.store.dispatch(new DecreaseBasketArticleQuantityAction(respObject.response));
      },
        (err: any) => {
          this.toastr.error(err.error.message);
        })
  }

  removeShoppingCartArticle(articleId: number) {
    this.http.post(AppComponent.API_URL + "/cartArticle/remove/" + articleId, {}, { withCredentials: true })
      .subscribe((respObject: any) => {
        this.toastr.success(respObject.message);
        this.store.dispatch(new RemoveBasketArticleAction(respObject.response));
      },
        (err: any) => {
          this.toastr.error(err.error.message);
        })
  }

}
