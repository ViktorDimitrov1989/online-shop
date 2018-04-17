import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../store/app-state';
import { Store } from '@ngrx/store';
import { ArticleService } from '../../../services/article/article.service';

@Component({
  selector: 'app-advert-list',
  templateUrl: './advert-list.component.html',
  styleUrls: ['./advert-list.component.css']
})
export class AdvertListComponent implements OnInit {

  public adverts: any[];

  constructor(
    private store: Store<AppState>,
    private articleService: ArticleService
  ) {
    this.store.select(store => store.articleState.adverts).subscribe(data => {
      console.log(data);
      this.adverts = data;
    })
  }

  ngOnInit() {
    this.articleService.getAdverts();
  }

}
