import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ArticleDetailsComponent } from '../article-details/article-details.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app-state';
import { EditStatusComponent } from '../../status/edit-status/edit-status.component';
import { EditArticleComponent } from '../edit-article/edit-article.component';
import { DeleteArticleComponent } from '../delete-article/delete-article.component';

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

  showEditStatus(){
    this.dialog.open(EditStatusComponent, {
      data: {
        status: this.article.status
      }
   });
  }

  showDeleteArticle(){
    this.dialog.open(DeleteArticleComponent, {
      data: {
        article: this.article
      }
   });
  }

  showEditArticle(){
    this.dialog.open(EditArticleComponent, {
      data: {
        article: this.article
      }
   });
  }

}
