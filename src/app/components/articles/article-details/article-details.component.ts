import { Component, OnInit, Inject } from '@angular/core';
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
  styleUrls: ['./article-details.component.css']
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

  private basketId: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public store: Store<AppState>,
    public basketService: BasketService,
    public dialogRef: MatDialogRef<ArticleDetailsComponent>,
    public router: Router,
    public toastr: ToastrService
  ) {
    this.article = data.article;
    this.basketId = data.shoppingCartId;
    console.log(data);

    this.sizesFormControl.valueChanges.subscribe(data => {
      console.log(data);
      if (data) {
        this.isSizeSelected = true;
      } else {
        this.isSizeSelected = false;
      }
    })

    this.colorsFormControl.valueChanges.subscribe(data => {
      console.log(data);
      if (data) {
        this.isColorSelected = true;
      } else {
        this.isColorSelected = false;
      }
    })
  }

  ngOnInit() {
  }

  addArticleToTheBasket() {

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
