import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ArticleDetailsComponent } from '../article-details/article-details.component';
import { ArticleService } from '../../../services/article/article.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app-state';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  
  public showFiller = false;
  public articlesList: any[];
  public articlesLength: number;

  private pageIndex: number = 0;
  private pageSize: number = 10;

  constructor(
    private store: Store<AppState>,
    public dialog: MatDialog,
    public articleService: ArticleService) {

      this.store.select(state => state.articleState.allArticles)
      .subscribe(data => {
        this.articlesList = data.content;
        this.articlesLength = data.totalElements;
      });
      this.articleService.getArticles(this.pageIndex, this.pageSize);

  }

  ngOnInit() {
  }

  fetchRecords(message:any):void {
    this.pageIndex = message.pageIndex + 1;
    this.pageSize = message.pageSize;

    this.articleService.getArticles(this.pageIndex, this.pageSize);
  }

  viewDetails(){
    this.dialog.open(ArticleDetailsComponent, {
      // data: {
      //   animal: 'panda'
      // }
    });
  }


}
