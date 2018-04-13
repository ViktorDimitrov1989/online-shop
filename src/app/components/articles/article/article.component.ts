import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ArticleDetailsComponent } from '../article-details/article-details.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app-state';
import { EditStatusComponent } from '../../status/edit-status/edit-status.component';
import { EditArticleComponent } from '../edit-article/edit-article.component';
import { DeleteArticleComponent } from '../delete-article/delete-article.component';
import { BasketService } from '../../../services/basket/basket.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() article: any;
  public isAdmin: boolean;

  private loggedUser: any;

  private loggedUserBasket: any;

  constructor(
    public dialog: MatDialog,
    public store: Store<AppState>,
    public basketService: BasketService
  ) {
    this.isAdmin = sessionStorage.getItem('isAdmin') == 'true';

    this.hookToTheState();
  }

  hookToTheState() {
    this.store.select(state => state.userState.loggedUser)
      .subscribe(data => {
        if (data) {
          this.loggedUser = data;
        }
      });

    this.store.select(state => state.basketState.loggedUserBasket)
      .subscribe(data => {
        if (data) {
          this.loggedUserBasket = data;
        }
      });
  }

  ngOnInit() {
    if(!this.loggedUserBasket){
      this.basketService.getBasketByUserId(this.loggedUser.id);
    }
  }

  viewDetails() {
    this.dialog.open(ArticleDetailsComponent, {
      data: {
        article: this.article,
        shoppingCartId: this.loggedUserBasket.id
      }
    });
  }

  showEditStatus() {
    this.dialog.open(EditStatusComponent, {
      data: {
        status: this.article.status
      }
    });
  }

  showDeleteArticle() {
    this.dialog.open(DeleteArticleComponent, {
      data: {
        article: this.article
      }
    });
  }

  showEditArticle() {
    this.dialog.open(EditArticleComponent, {
      data: {
        article: this.article
      }
    });
  }

}
