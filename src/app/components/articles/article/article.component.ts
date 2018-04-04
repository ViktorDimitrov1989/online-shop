import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ArticleDetailsComponent } from '../article-details/article-details.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() article: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  viewDetails(){
    this.dialog.open(ArticleDetailsComponent, {
      data: {
        article: this.article
      }
   });
  }

}
