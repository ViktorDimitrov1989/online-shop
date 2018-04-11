import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ArticleDetailsComponent } from '../article-details/article-details.component';
import { ArticleService } from '../../../services/article/article.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app-state';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';


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

  private chosenSeason: string;
  private chosenGender: string;
  private filterArticlesBindingModel: any;

  private pageIndex: number = 0;
  private pageSize: number = 10;

  constructor(
    private store: Store<AppState>,
    public dialog: MatDialog,
    public articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.router.events.subscribe((val: any) => {
      if (val.url && val.url.indexOf('articles') > -1) {
        let tokens: string[] = val.url.split('/');

        this.chosenGender = tokens[2].toUpperCase();
        this.chosenSeason = tokens[3].toUpperCase();
        this.onFilterChange();
      }

    })

    this.hookToTheState();
  }

  hookToTheState() {
    this.store.select(state => state.articleState.allArticles)
      .subscribe(data => {
        if (data.content) {
          this.articlesList = data.content;
          this.articlesLength = this.articlesList.length;
        }

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
    this.chosenGender = this.route.snapshot.params.gender;
    this.chosenSeason = this.route.snapshot.params.season;
    this.articleService.getArticleOptions();
    this.onFilterChange();
  }

  onFilterChange() {
    this.filterArticlesBindingModel = {
      selectedSizes: this.selectedSizes,
      selectedColors: this.selectedColors,
      selectedCategories: this.selectedCategories,
      selectedBrands: this.selectedBrands,
      selectedStatuses: this.selectedStatuses,
      chosenSeason: this.chosenSeason.toUpperCase(),
      chosenGender: this.chosenGender.toUpperCase()
    };

    this.articleService.filterArticles(this.pageIndex, this.pageSize, this.filterArticlesBindingModel);

  }

  public fetchRecords(message: any): void {
    this.pageIndex = message.pageIndex;
    this.pageSize = message.pageSize;

    this.filterArticlesBindingModel = {
      selectedSizes: this.selectedSizes,
      selectedColors: this.selectedColors,
      selectedCategories: this.selectedCategories,
      selectedBrands: this.selectedBrands,
      selectedStatuses: this.selectedStatuses,
      chosenSeason: this.chosenSeason,
      chosenGender: this.chosenGender
    };

    this.articleService.filterArticles(this.pageIndex, this.pageSize, this.filterArticlesBindingModel);
  }

  viewDetails() {
    this.dialog.open(ArticleDetailsComponent, {
      // data: {
      //   animal: 'panda'
      // }
    });
  }


}
