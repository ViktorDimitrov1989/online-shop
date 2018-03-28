import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmPopupComponent } from '../../shared/confirm-popup/confirm-popup.component';
import { FormErrorStateMatcher } from '../../../utils/error-state-matcher';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import CreateArticle from '../../../models/create-article';
import { FileValidators } from '../../../utils/file-validators';
import { ArticleService } from '../../../services/article/article.service';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app-state';

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

  public createArticleForm = new FormGroup({
    dispalyName: this.displayNameFormControl,
    description: this.descriptionFormControl,
    picture: this.pictureFormControl,
    price: this.priceFormControl,
    brand: this.brandFormControl,
    category: this.categoryFormControl,
    sizes: this.sizesFormControl,
    colors: this.colorsFormControl,
    status: this.statusFormControl
  })

  public matcher = new FormErrorStateMatcher();
  public article: CreateArticle;
  public isBrandSelected: boolean;
  public isCategorySelected: boolean;
  public isSizesSelected: boolean;
  public isColorsSelected: boolean;
  public isStatusSelected: boolean;

  public brands: any[];
  private categories: any[];
  public colors: any[];
  public sizes: any[];

  public boysSpringSummerCategories: any[];
  public boysFallWinterCategories: any[];
  public girlsSpringSummerCategories: any[];
  public girslFallWinterCategories: any[];

  panelOpenState: boolean = false;

  constructor(
    public dialog: MatDialog,
    public articleService: ArticleService,
    public toastr: ToastrService,
    private store: Store<AppState>) {

    this.article = {
      name: '',
      description: '',
      photo: '',
      brandName: '',
      price: 0,
      status: '',
      expireDate: new Date(),
      discount: 0,
      colors: [],
      sizes: [],
      categoryId: 0
    }

    this.hookToTheState();

    this.subscribeToFields();

  }

  filterCategories(categories: any[]) {
    this.boysFallWinterCategories = categories.filter(function (cat) {
      return cat.season === 'FALL_WINTER' && cat.gender === 'BOYS';
    })

    this.boysSpringSummerCategories = categories.filter(function (cat) {
      return cat.season === 'SPRING_SUMMER' && cat.gender === 'BOYS';
    })

    this.girlsSpringSummerCategories = categories.filter(function (cat) {
      return cat.season === 'SPRING_SUMMER' && cat.gender === 'GIRLS';
    })

    this.girslFallWinterCategories = categories.filter(function (cat) {
      return cat.season === 'FALL_WINTER' && cat.gender === 'GIRLS';
    })
  }

  subscribeToFields() {
    this.brandFormControl.valueChanges.subscribe(data => {
      if (data !== '' && data != undefined) {
        this.isBrandSelected = true;
      }
    })

    this.categoryFormControl.valueChanges.subscribe(data => {
      if (data !== 0 && data != undefined) {
        this.isCategorySelected = true;
      }
    })

    this.sizesFormControl.valueChanges.subscribe(data => {
      if (data.length > 0) {
        this.isSizesSelected = true;
      } else {
        this.isSizesSelected = false;
      }
    })

    this.colorsFormControl.valueChanges.subscribe(data => {
      if (data.length > 0) {
        this.isColorsSelected = true;
      } else {
        this.isColorsSelected = false;
      }
    })

    this.statusFormControl.valueChanges.subscribe(data => {
      if (data !== '' && data != undefined) {
        this.isStatusSelected = true;
      }
    })
  }

  hookToTheState() {
    this.store.select(state => state.articleState.categories).subscribe(data => {
      this.categories = data;
      this.filterCategories(this.categories);
    });

    this.store.select(state => state.articleState.sizes).subscribe(data => {
      this.sizes = data;
    });

    this.store.select(state => state.articleState.colors).subscribe(data => {
      this.colors = data;
    });

    this.store.select(state => state.articleState.brands).subscribe(data => {
      this.brands = data;
    });
  }

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      this.article.photo = file;
    }
  }

  ngOnInit() {
    this.articleService.getArticleOptions();
  }

  confirmCreation() {
    if (!this.createArticleForm.valid) {
      this.toastr.error('Не всички задължителни полета са попълнени!');
    } else {
      console.log(this.article);
      this.articleService.createArticle(this.article);
    }
  }

}
