import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app-state';
import { BasketService } from '../../../services/basket/basket.service';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleDetailsComponent implements OnInit {

  sizesFormControl = new FormControl('', [
    Validators.required
  ])

  colorsFormControl = new FormControl('', [
    Validators.required
  ])

  public createArticleForm = new FormGroup({
    sizes: this.sizesFormControl,
    colors: this.colorsFormControl
  })

  public article: any;
  public chosenColor: string;
  public chosenSize: string;
  public isSizeSelected: boolean;
  public isColorSelected: boolean;
  public isAuthenticated: boolean;
  public isAdmin: boolean;

  private basketId: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public store: Store<AppState>,
    public basketService: BasketService,
    public dialogRef: MatDialogRef<ArticleDetailsComponent>,
    public router: Router,
    public toastr: ToastrService
  ) {
    console.log(data);
    this.article = data.article;
    this.basketId = data.shoppingCartId;

    

    this.store.select(state => state.userState.isAdmin).subscribe(data => this.isAdmin = data);

    this.sizesFormControl.valueChanges.subscribe(data => {
      if (data) {
        this.isSizeSelected = true;
      } else {
        this.isSizeSelected = false;
      }
    })

    this.colorsFormControl.valueChanges.subscribe(data => {
      if (data) {
        this.isColorSelected = true;
      } else {
        this.isColorSelected = false;
      }
    })
  }

  ngOnInit() {
    this.store.select(state => state.userState.authenticated).subscribe(data => this.isAuthenticated = data);

  }

  addArticleToTheBasket() {

    if(!this.isAuthenticated){
      this.toastr.error('Не сте автентикиран за тази функцоналност!');
    }

    if (!this.createArticleForm.valid) {
      this.toastr.error('Не всички задължителни полета са попълнени!');
    } else {
      this.basketService.addBasketArticle({
        shoppingCartId: this.basketId,
        articleId: this.article.id,
        size: this.chosenSize,
        color: this.chosenColor
      })
      this.dialogRef.close();
      this.router.navigateByUrl('basket');
    }
  }


}
