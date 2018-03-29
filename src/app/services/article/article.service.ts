import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Store } from "@ngrx/store";
import { AppState } from "../../store/app-state";
import { AppComponent } from "../../app.component";
import { CreateArticleAction, GetArticleOptions, CreateBrandAction, GetArticlesAction, CreateCategoryAction } from "../../store/article/article-actions";
import CreateArticle from "../../models/create-article";
import { CreateBrand } from "../../models/create-brand";
import { CreateCategory } from "../../models/create-category";

@Injectable()
export class ArticleService {

  constructor(private http: HttpClient,
    private router: Router,
    private toastr: ToastrService,
    public store: Store<AppState>) {

  }

  getArticleOptions(){
    this.http.get(AppComponent.API_URL + "/admin/article/options", { withCredentials: true })
      .subscribe((respObject: any) => {
        let colors = respObject.response.colors;
        let sizes = respObject.response.sizes;
        let brands = respObject.response.brands;
        let categories = respObject.response.categories;
        this.store.dispatch(new GetArticleOptions(brands, colors, sizes, categories));
      },
        (err: any) => {
          this.toastr.error(err.error.message);
        })
  }

  createArticle(articleToCreate: CreateArticle) {

    let data = new FormData();
    let { name, description, brandName, price, status, expireDate, discount, colors, sizes, category } = articleToCreate;

    data.append('article', new Blob([JSON.stringify({ name, description, brandName, price, status, expireDate, discount, colors, sizes, category })],
      { type: 'application/json' }));

    if (articleToCreate.photo) {
      data.append('photo', articleToCreate.photo);
    }

    this.http.post(AppComponent.API_URL + "/admin/article/create", data, { withCredentials: true })
      .subscribe((respObject: any) => {
        this.toastr.success(respObject.message);
        this.store.dispatch(new CreateArticleAction(respObject));
      },
        (err: any) => {
          this.toastr.error(err.error.message);
        })
  }

  createBrand(brand: CreateBrand){
    this.http.post(AppComponent.API_URL + "/admin/brand/create", brand, { withCredentials: true })
      .subscribe((respObject: any) => {
        this.toastr.success(respObject.message);
        this.store.dispatch(new CreateBrandAction(respObject.response));
      },
        (err: any) => {
          this.toastr.error(err.error.message);
        })
  }

  createCategory(category: CreateCategory){
    this.http.post(AppComponent.API_URL + "/admin/category/create", category, { withCredentials: true })
      .subscribe((respObject: any) => {
        console.log(respObject)
        this.toastr.success(respObject.message);
        this.store.dispatch(new CreateCategoryAction(respObject.response));
      },
        (err: any) => {
          this.toastr.error(err.error.message);
        })
  }

  getArticles(page: number, size: number) {
    this.http.get(AppComponent.API_URL + "/article/all?page=" + page + "&size=" + size, { withCredentials: true })
      .subscribe((respObject: any) => {
        this.store.dispatch(new GetArticlesAction(respObject.response));
      },
        (err: any) => {
          this.toastr.error(err.error.message);
        })
  }

}