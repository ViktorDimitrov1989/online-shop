import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ArticleDetailsComponent } from '../article-details/article-details.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app-state';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() article: any;
  public isAdmin: boolean;

  constructor(
    public dialog: MatDialog 
  ) { 
      this.isAdmin = sessionStorage.getItem('isAdmin') == 'true';
  }

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
