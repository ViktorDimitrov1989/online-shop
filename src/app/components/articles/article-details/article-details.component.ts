import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app-state';
import { BasketService } from '../../../services/basket/basket.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  public article: any;
  public chosenColor: string;
  public chosenSize: string;

  private basketId: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public store: Store<AppState>,
    public basketService: BasketService,
  ) {
    this.article = data.article;
    this.basketId = data.shoppingCartId;
  }

  ngOnInit() {
  }

  addArticleToTheBasket() {
    console.log('article is added to the basket');
    this.basketService.addBasketArticle({
      shoppingCartId: this.basketId,
      articleId: this.article.id,
      size: this.chosenSize,
      color: this.chosenColor
    })

  }


}
