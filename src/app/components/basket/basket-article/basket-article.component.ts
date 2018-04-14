import { Component, OnInit, Input } from '@angular/core';
import { BasketService } from '../../../services/basket/basket.service';
@Component({
  selector: 'app-basket-article',
  templateUrl: './basket-article.component.html',
  styleUrls: ['./basket-article.component.css']
})
export class BasketArticleComponent implements OnInit {

  @Input() basketArticle: any;

  constructor(
    private basketService: BasketService
  ) {
  }

  ngOnInit() {
    console.log(this.basketArticle);
  }

  increaseQuantity(){
    this.basketService.increaseShoppingCartArticleQuantity(this.basketArticle.id);
  }

  decreaseQuantity(){
    this.basketService.decreaseShoppingCartArticleQuantity(this.basketArticle.id);
  }

  removeArticle(){
    this.basketService.removeShoppingCartArticle(this.basketArticle.id);
  }

}
