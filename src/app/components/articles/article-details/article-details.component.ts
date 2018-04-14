import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app-state';
import { BasketService } from '../../../services/basket/basket.service';
import { Router } from '@angular/router';

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
    public dialogRef: MatDialogRef<ArticleDetailsComponent>,
    public router: Router
  ) {
    this.article = data.article;
    this.basketId = data.shoppingCartId;
    console.log(data);
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
    this.dialogRef.close();
    this.router.navigateByUrl('basket');
  }


}
