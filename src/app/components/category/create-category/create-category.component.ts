import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmPopupComponent } from '../../shared/confirm-popup/confirm-popup.component';
import { FormErrorStateMatcher } from '../../../utils/error-state-matcher';
import { CreateCategory } from '../../../models/create-category';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  nameFormControl = new FormControl('', [
    Validators.required
  ])
  minAgeFormControl = new FormControl('', [
    Validators.required,
    Validators.min(0)
  ])
  maxAgeFormControl = new FormControl('', [
    Validators.required,
    Validators.max(18)
  ])
  genderFormControl = new FormControl('', [
    Validators.required
  ])
  sezonFormControl = new FormControl('', [
    Validators.required
  ])


  public matcher = new FormErrorStateMatcher();
  public category: CreateCategory;
  public isGenderSelected: boolean;
  public isSezonSelected: boolean;
  public isMaxAgeCorrect: boolean;

  constructor(public dialog: MatDialog) { 
    this.category = {
      name: '',
      minAge: 0,
      maxAge: 0,
      gender: '',
      sezon: ''
    }

    this.genderFormControl.valueChanges.subscribe(data => {
      if (data !== '' && data != undefined) {
        this.isGenderSelected = true;
      }
    })

    this.sezonFormControl.valueChanges.subscribe(data => {
      if (data !== '' && data != undefined) {
        this.isSezonSelected = true;
      }
    })

    this.maxAgeFormControl.valueChanges.subscribe(data => {
      if (data <= this.category.minAge) {
        this.isMaxAgeCorrect = false;
      }else{
        this.isMaxAgeCorrect = true;
      }
    })

    this.minAgeFormControl.valueChanges.subscribe(data => {
      if (data >= this.category.maxAge) {
        this.isMaxAgeCorrect = false;
      }else{
        this.isMaxAgeCorrect = true;
      }
    })

  }

  ngOnInit() {
  }

  confirmCreation(){
    this.dialog.open(ConfirmPopupComponent, {
      data: {
        message: 'Създай категория?'
      }
    });
  }

}
