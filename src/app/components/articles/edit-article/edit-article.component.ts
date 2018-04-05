import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EditStatusComponent } from '../../status/edit-status/edit-status.component';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  public article: any;

  constructor(public dialogRef: MatDialogRef<EditArticleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    this.article = data.article;
  }

  ngOnInit() {
  }

}
