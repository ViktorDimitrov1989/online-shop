import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material';
import { ArticleDetailsComponent } from '../../articles/article-details/article-details.component';
import { AppState } from '../../../store/app-state';
import { State, Store } from '@ngrx/store';

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.css']
})
export class AdvertComponent implements OnInit {

  @Input() advert: any;

  public photo: any;

  private loggedUserCartId: number;

  constructor(
    private sanitizer:DomSanitizer,
    public dialog: MatDialog,
    private store : Store<AppState>
  ) {

    this.store.select(state => state.basketState.loggedUserBasket)
      .subscribe(data => {
        if (data.id) {
          this.loggedUserCartId = data.id;
        }
      });

  }

  ngOnInit() {
  }

  getBackground(image){
    return this.sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }

  showDetails(){
    this.dialog.open(ArticleDetailsComponent, {
      data: {
        article: this.advert,
        shoppingCartId: this.loggedUserCartId
      }
    });
  }

}
