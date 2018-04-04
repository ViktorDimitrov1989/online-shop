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

  public selectedBrands: any[] = [];
  public selectedColors: any[] = [];
  public selectedSizes: any[] = [];
  public selectedCategories: any[] = [];
  public selectedStatuses: any[] = [];
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

  onFilterChange() {
    let bindingModel = {
      selectedSizes: this.selectedSizes,
      selectedColors: this.selectedColors,
      selectedCategories: this.selectedCategories,
      selectedBrands: this.selectedBrands,
      selectedStatuses: this.selectedStatuses,
      chosenSeason: 'SPRING_SUMMER',
      chosenGender: 'GIRLS'
    };

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
