import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../store/app-state';
import { BasketService } from '../../../services/basket/basket.service';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basket-article-list',
  templateUrl: './basket-article-list.component.html',
  styleUrls: ['./basket-article-list.component.css']
})
export class BasketArticleListComponent implements OnInit {

  private loggedUser: any;

  private loggedUserBasket: any;

  public overallPrice: number = 0;

  public hasArticles: boolean;

  constructor(
    private store: Store<AppState>,
    private basketService: BasketService,
    private router: Router
  ) {
    this.store.select(state => state.basketState.loggedUserBasket)
      .subscribe(data => {
        if (data.articles) {
          console.log(data)
          this.loggedUserBasket = data;
          if (this.loggedUserBasket.articles.length > 0) {
            this.hasArticles = true;
            this.calculateOverallPrice();
          }else{
            this.hasArticles = false;
          }

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

  calculateOverallPrice() {
    this.overallPrice = 0;
    for (let article of this.loggedUserBasket.articles) {
      let currentArticlePrice = (Number(article.article.price) - (Number(article.article.price) * (Number(article.article.status.discount) / 100))) * article.quantity;
      //console.log(currentArticlePrice);
      this.overallPrice += (Number(article.article.price) - (Number(article.article.price) * (Number(article.article.status.discount) / 100))) * article.quantity;
    }
  }

  ngOnInit() {
  }

  clearBasket() {
    this.basketService.clearBasketById(this.loggedUserBasket.id);
    this.router.navigateByUrl('/');
  }

}
