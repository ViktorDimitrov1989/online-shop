import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmPopupComponent } from '../../shared/confirm-popup/confirm-popup.component';
import { CreateBrand } from '../../../models/create-brand';
import { FormErrorStateMatcher } from '../../../utils/error-state-matcher';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-brand',
  templateUrl: './create-brand.component.html',
  styleUrls: ['./create-brand.component.css']
})
export class CreateBrandComponent implements OnInit {

  nameFormControl = new FormControl('', [
    Validators.required
  ])

  descriptionFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(35)
  ])


  public matcher = new FormErrorStateMatcher();
  public brand: CreateBrand;

  constructor(public dialog: MatDialog) {
    this.brand = {
      name: '',
      description: ''
    }

  }

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
