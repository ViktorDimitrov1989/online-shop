import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ArticleService } from '../../../services/article/article.service';

@Component({
  selector: 'app-delete-article',
  templateUrl: './delete-article.component.html',
  styleUrls: ['./delete-article.component.css']
})
export class DeleteArticleComponent implements OnInit {

  public article: any;

  constructor(
    public dialogRef: MatDialogRef<DeleteArticleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public articleService: ArticleService  
  ) {
    this.article = data.article;
  }

  hideModal() {
    this.dialogRef.close();
  }

  deleteArticle(){
    this.articleService.deleteArticle(this.article.id);
    this.hideModal();
  }

  ngOnInit() {
  }

}
