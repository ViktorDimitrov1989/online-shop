import { Component, OnInit, Inject, state } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EditStatusComponent } from '../../status/edit-status/edit-status.component';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { FileValidators } from '../../../utils/file-validators';
import { AppState } from '../../../store/app-state';
import { Store } from '@ngrx/store';
import { ArticleService } from '../../../services/article/article.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  displayNameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ])

  descriptionFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(35)
  ])

  pictureFormControl = new FormControl('', [
    FileValidators.maxContentSize(10485760)
  ])

  priceFormControl = new FormControl('', [
    Validators.required,
    Validators.min(1)
  ])

  sizesFormControl = new FormControl('', [
    Validators.required
  ])

  colorsFormControl = new FormControl('', [
    Validators.required
  ])

  public editArticleForm = new FormGroup({
    dispalyName: this.displayNameFormControl,
    description: this.descriptionFormControl,
    picture: this.pictureFormControl,
    price: this.priceFormControl,
    sizes: this.sizesFormControl,
    colors: this.colorsFormControl
  })

  public article: any;
  public colors: any;
  public sizes: any;
  public isSizesSelected: boolean;
  public isColorsSelected: boolean;

  constructor(
    public dialogRef: MatDialogRef<EditArticleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public store: Store<AppState>,
    public articleService: ArticleService
  ) {
    this.article = data.article;

    this.store.select(state => state.articleState.colors)
      .subscribe(colors => {
        this.colors = colors;
      })

    this.store.select(state => state.articleState.sizes)
      .subscribe(sizes => {
        this.sizes = sizes;
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
  }

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      this.article.photo = file;
    }
  }

  editArticle() {
    this.articleService.editArticle(this.article);
    this.hideModal();
  }

  hideModal() {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
