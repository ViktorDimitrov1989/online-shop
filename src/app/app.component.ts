import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs/observable';
import Clothe from './models/article';
import { ArticleActions } from './store/article.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';

  @select('clothes') clothes: Observable<Clothe>;
  @select('filteredClothes') filteredClothes: Observable<Clothe>;

  constructor(private clotheActions: ArticleActions){

  }


  ngOnInit(): void {
    //disdpatch action and change the state
    this.clotheActions.filterClothes('ad');

    console.log(this.clothes);
    console.log(this.filteredClothes);
  }

}
