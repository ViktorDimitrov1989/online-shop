import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmPopupComponent } from '../../shared/confirm-popup/confirm-popup.component';
import { FormErrorStateMatcher } from '../../../utils/error-state-matcher';
import { FormControl, Validators } from '@angular/forms';
import CreateArticle from '../../../models/create-article';
import { FileValidators } from '../../../utils/file-validators';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  displayNameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ])

  descriptionFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(35)
  ])

  pictureFormControl = new FormControl('', [
    Validators.required,
    FileValidators.maxContentSize(10485760)
  ])

  priceFormControl = new FormControl('', [
    Validators.required,
    Validators.min(1)
  ])

  brandFormControl = new FormControl('', [
    Validators.required
  ])

  categoryFormControl = new FormControl('', [
    Validators.required
  ])

  sizesFormControl = new FormControl('', [
    Validators.required
  ])

  colorsFormControl = new FormControl('', [
    Validators.required
  ])

  statusFormControl = new FormControl('', [
    Validators.required
  ])


  public matcher = new FormErrorStateMatcher();
  public article: CreateArticle;
  public isBrandSelected: boolean;
  public isCategorySelected: boolean;
  public isSizesSelected: boolean;
  public isColorsSelected: boolean;
  public isStatusSelected: boolean;

  constructor(public dialog: MatDialog) {
    this.article = {
      displayName: '',
      description: '',
      photo: {},
      brand: '',
      price: 0,
      status: '',
      expireDate: new Date(),
      discount: 0,
      colors: [],
      sizes: []
    }

    this.brandFormControl.valueChanges.subscribe(data => {
      if (data !== '' && data != undefined) {
        this.isBrandSelected = true;
      }
    })

    this.categoryFormControl.valueChanges.subscribe(data => {
      if (data !== '' && data != undefined) {
        this.isCategorySelected = true;
      }
    })

    this.sizesFormControl.valueChanges.subscribe(data => {
      if(data.length > 0){
        this.isSizesSelected = true;
      }else{
        this.isSizesSelected = false;
      }
    })

    this.colorsFormControl.valueChanges.subscribe(data => {
      if(data.length > 0){
        this.isColorsSelected = true;
      }else{
        this.isColorsSelected = false;
      }
    })

    this.statusFormControl.valueChanges.subscribe(data => {
      if (data !== '' && data != undefined) {
        this.isStatusSelected = true;
      }
    })

  }

  ngOnInit() {
  }

  confirmCreation() {
    this.dialog.open(ConfirmPopupComponent, {
      data: {
        message: 'Създай артикул?'
      }
    });
  }

}
