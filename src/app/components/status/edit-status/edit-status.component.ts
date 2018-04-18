import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ArticleService } from '../../../services/article/article.service';


@Component({
  selector: 'app-edit-status',
  templateUrl: './edit-status.component.html',
  styleUrls: ['./edit-status.component.css']
})
export class EditStatusComponent implements OnInit {

  public status: any;

  constructor(public dialogRef: MatDialogRef<EditStatusComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public articleService: ArticleService) {
    this.status = data.status;
    this.status.expireDate = this.getDate();
    console.log(this.status);
  }

  ngOnInit() {
  }

  confirmEdit() {
    this.articleService.editArticleStatus(this.status);
    this.hideModal();
  }

  getDate(): Date {
    if (this.status.expireDate && typeof this.status.expireDate.getMonth != 'function') {
      let tokens = this.status.expireDate.split('-');

      let year = tokens[0];
      let month = tokens[1];
      let day = tokens[2].substring(0, 2);

      let res = new Date(year, month - 1, day);

      return res;
    }

    return this.status.expireDate;
  }

  hideModal() {
    this.dialogRef.close();
  }

}
