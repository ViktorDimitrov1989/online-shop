import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs/observable';
import { ArticleActions } from './store/article/article.actions';
import Article from './models/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  static API_URL="http://localhost:8080";

  @select('clothes') clothes: Observable<Article>;
  @select('filteredClothes') filteredClothes: Observable<Article>;

  constructor(private articleActions: ArticleActions){

  }

  ngOnInit(): void {
    //disdpatch action and change the state
    this.articleActions.filterClothes('ad');

    console.log(this.clothes);
    console.log(this.filteredClothes);
  }

}
