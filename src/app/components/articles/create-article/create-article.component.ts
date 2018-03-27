import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmPopupComponent } from '../../shared/confirm-popup/confirm-popup.component';
import { FormErrorStateMatcher } from '../../../utils/error-state-matcher';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import CreateArticle from '../../../models/create-article';
import { FileValidators } from '../../../utils/file-validators';
import { ArticleService } from '../../../services/article/article.service';

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

  seasonFormControl = new FormControl('', [
    Validators.required
  ])

  genderFormControl = new FormControl('', [
    Validators.required
  ])

  public createArticleForm = new FormGroup({
    dispalyName: this.displayNameFormControl,
    description: this.descriptionFormControl,
    picture: this.pictureFormControl,
    price: this.priceFormControl,
    brand: this.brandFormControl,
    category: this.categoryFormControl,
    sizes: this.sizesFormControl,
    colors: this.colorsFormControl,
    status: this.statusFormControl,
    gender: this.genderFormControl,
    season: this.seasonFormControl
  })


  public matcher = new FormErrorStateMatcher();
  public article: CreateArticle;
  public isBrandSelected: boolean;
  public isCategorySelected: boolean;
  public isSizesSelected: boolean;
  public isColorsSelected: boolean;
  public isStatusSelected: boolean;
  public isGenderSelected: boolean;
  public isSeasonSelected: boolean;

  constructor(public dialog: MatDialog, public articleService: ArticleService) {
    this.article = {
      season: '',
      gender: '',
      name: '',
      description: '',
      photo: '',
      brandName: '',
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

    this.genderFormControl.valueChanges.subscribe(data => {
      if (data !== '' && data != undefined) {
        this.isGenderSelected = true;
      }
    })

    this.seasonFormControl.valueChanges.subscribe(data => {
      if (data !== '' && data != undefined) {
        this.isSeasonSelected = true;
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
    console.log(this.article)
    this.articleService.createArticle(this.article);
    // this.dialog.open(ConfirmPopupComponent, {
    //   data: {
    //     message: 'Създай артикул?'
    //   }
    // });
  }

}
