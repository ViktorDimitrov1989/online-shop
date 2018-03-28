import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmPopupComponent } from '../../shared/confirm-popup/confirm-popup.component';
import { CreateBrand } from '../../../models/create-brand';
import { FormErrorStateMatcher } from '../../../utils/error-state-matcher';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ArticleService } from '../../../services/article/article.service';

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

  public createBrandForm = new FormGroup({
    name: this.nameFormControl,
    description: this.descriptionFormControl
  })


  public matcher = new FormErrorStateMatcher();
  public brand: CreateBrand;

  constructor(
    public toastr: ToastrService,
    public articleService: ArticleService
  ) {
    this.brand = {
      name: '',
      description: ''
    }

  }

  ngOnInit() {
  }

  confirmCreation() {
    if(!this.createBrandForm.valid){
      this.toastr.error('Полетата във формата не са попълнени коректно!');
    }else{
      console.log(this.brand);
      this.articleService.createBrand(this.brand);
    }
  }

}
