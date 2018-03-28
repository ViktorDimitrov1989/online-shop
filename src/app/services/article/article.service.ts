import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Store } from "@ngrx/store";
import { AppState } from "../../store/app-state";
import { AppComponent } from "../../app.component";
import { CreateArticleAction, GetArticleOptions } from "../../store/article/article-actions";
import CreateArticle from "../../models/create-article";

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
    let { name, description, brandName, price, status, expireDate, discount, colors, sizes, categoryId } = articleToCreate;

    data.append('article', new Blob([JSON.stringify({ name, description, brandName, price, status, expireDate, discount, colors, sizes, categoryId })],
      { type: 'application/json' }));

    if (articleToCreate.photo) {
      data.append('photo', articleToCreate.photo);
    }

    this.http.post(AppComponent.API_URL + "/admin/article/create", data, { withCredentials: true })
      .subscribe((respObject: any) => {
        console.log(respObject);
        this.store.dispatch(new CreateArticleAction(respObject));
      },
        (err: any) => {
          this.toastr.error(err.error.message);
        })
  }



  getArticles() {
    this.http.get(`url`).subscribe(articles => {
      return 'asd';
    },
      err => {
        console.log(err);
      });
  }

}