import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../store/app-state';
import { BasketService } from '../../../services/basket/basket.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-basket-article-list',
  templateUrl: './basket-article-list.component.html',
  styleUrls: ['./basket-article-list.component.css']
})
export class BasketArticleListComponent implements OnInit {

  private loggedUser: any;

  constructor(
    private store: Store<AppState>,
    private basketService: BasketService
  ) {
    this.store.select(state => state.basketState.loggedUserBasket)
      .subscribe(data => {
        if (data) {
          console.log(data)
        }

      });

    this.store.select(state => state.userState.loggedUser)
      .subscribe(data => {
        if (data) {
          if (data) {
            this.loggedUser = data
          }
        }

      });
  }

  ngOnInit() {
    if (this.loggedUser.id) {
      this.basketService.getBasketByUserId(this.loggedUser.id);
    }
  }

}
