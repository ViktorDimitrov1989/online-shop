import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-delete-article',
  templateUrl: './delete-article.component.html',
  styleUrls: ['./delete-article.component.css']
})
export class DeleteArticleComponent implements OnInit {

  public article: any;

  constructor(public dialogRef: MatDialogRef<DeleteArticleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.article = data.article;
    console.log(this.article);
  }

  hideModal() {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
