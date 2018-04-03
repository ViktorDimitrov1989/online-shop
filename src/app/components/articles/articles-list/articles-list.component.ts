import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ArticleDetailsComponent } from '../article-details/article-details.component';
import { ArticleService } from '../../../services/article/article.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app-state';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {

  public showFiller = false;
  public articlesList: any[];
  public brands: any[];
  public colors: any[];
  public sizes: any[];
  public categories: any[];
  public statuses: any[] = ['REGULAR', 'PROMO', 'SALE'];
  public articlesLength: number;

  public forbiddenBrands: any[] = [];
  public forbiddenColors: any[] = [];
  public forbiddenSizes: any[] = [];
  public forbiddenCategories: any[] = [];
  public forbiddenStatuses: any[] = [];
  public chosenSeason: string;
  public chosenGender: string;

  private pageIndex: number = 0;
  private pageSize: number = 10;

  constructor(
    private store: Store<AppState>,
    public dialog: MatDialog,
    public articleService: ArticleService) {

    this.store.select(state => state.articleState.allArticles)
      .subscribe(data => {
        this.articlesList = data.content;
        this.articlesLength = data.totalElements;
      });

    this.store.select(state => state.articleState.brands)
      .subscribe(data => {
        this.brands = data;
      })

    this.store.select(state => state.articleState.colors)
      .subscribe(data => {
        this.colors = data;
      })

    this.store.select(state => state.articleState.sizes)
      .subscribe(data => {
        this.sizes = data;
      })

    this.store.select(state => state.articleState.categories)
      .subscribe(data => {
        this.categories = data;
      })




  }

  ngOnInit() {
    this.articleService.getArticleOptions();
    this.articleService.getArticles(this.pageIndex, this.pageSize);
  }

  onFilterChange(type: string) {
    switch (type) {
      case 'size':
        for (let size of this.sizes) {
          if (this.forbiddenSizes.indexOf(size.name) == -1) {
            this.forbiddenSizes.push(size.name);
          } else {
            this.forbiddenSizes.splice(this.forbiddenSizes.indexOf(size.name), 1);
          }
        }
        break;
      case 'color':
        for (let color of this.colors) {
          if (this.forbiddenColors.indexOf(color.name) == -1) {
            this.forbiddenColors.push(color.name);
          } else {
            this.forbiddenColors.splice(this.forbiddenColors.indexOf(color.name), 1);
          }
        }
        break;
      case 'category':
        for (let cat of this.categories) {
          if (this.forbiddenCategories.indexOf(cat.id + "") == -1) {
            this.forbiddenCategories.push(cat.id + "");
          } else {
            this.forbiddenCategories.splice(this.forbiddenCategories.indexOf(cat.id + ""), 1);
          }
        }
        break;
      case 'brand':
        for (let brand of this.brands) {
          if (this.forbiddenBrands.indexOf(brand.name) == -1) {
            this.forbiddenBrands.push(brand.name);
          } else {
            this.forbiddenBrands.splice(this.forbiddenBrands.indexOf(brand.name), 1);
          }
        }
        break;
      case 'status':
        for (let status of this.statuses) {
          if (this.forbiddenStatuses.indexOf(status) == -1) {
            this.forbiddenStatuses.push(status);
          } else {
            this.forbiddenStatuses.splice(this.forbiddenStatuses.indexOf(status), 1);
          }
        }
        break;
      default:
        break;
    }

    let bindingModel = {
      forbiddenSizes: this.forbiddenSizes,
      forbiddenColors: this.forbiddenColors,
      forbiddenCategories: this.forbiddenCategories,
      forbiddenBrands: this.forbiddenBrands,
      forbiddenStatuses: this.forbiddenStatuses,
      chosenSeason: 'FALL_WINTER',
      chosenGender: 'GIRLS'
    };

    console.log(bindingModel);

    this.articleService.filterArticles(this.pageIndex, this.pageSize, bindingModel);

  }

  fetchRecords(message: any): void {
    this.pageIndex = message.pageIndex + 1;
    this.pageSize = message.pageSize;

    this.articleService.getArticles(this.pageIndex, this.pageSize);
  }

  viewDetails() {
    this.dialog.open(ArticleDetailsComponent, {
      // data: {
      //   animal: 'panda'
      // }
    });
  }


}
