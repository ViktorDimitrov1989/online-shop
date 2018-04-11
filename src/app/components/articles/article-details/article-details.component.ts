import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  public article: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { 
    console.log(data.article)
    this.article = data.article;
  }

  ngOnInit() {
  }

  addArticleToTheBasket(){
    console.log('article is added to the basket')
  }


}
