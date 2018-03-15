import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmPopupComponent } from '../../shared/confirm-popup/confirm-popup.component';

@Component({
  selector: 'app-create-brand',
  templateUrl: './create-brand.component.html',
  styleUrls: ['./create-brand.component.css']
})
export class CreateBrandComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  confirmCreation() {
    this.dialog.open(ConfirmPopupComponent, {
      data: {
        message: 'Създай бранд?'
      }
    });
  }

}
