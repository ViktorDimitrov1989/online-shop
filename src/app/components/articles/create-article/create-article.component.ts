import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmPopupComponent } from '../../shared/confirm-popup/confirm-popup.component';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  confirmCreation(){
    this.dialog.open(ConfirmPopupComponent, {
      data: {
        message: 'Създай артикул?'
      }
    });
  }

}
