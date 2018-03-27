import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Store } from "@ngrx/store";
import { AppState } from "../../store/app-state";
import { AppComponent } from "../../app.component";
import { CreateArticleAction } from "../../store/article/article-actions";

@Injectable()
export class ArticleService{

    constructor(private http: HttpClient,
        private router: Router,
        private toastr: ToastrService,
        public store: Store<AppState>){
        
    }

    createArticle(articleToCreate: any){
        this.http.post(AppComponent.API_URL + "/admin/article/create", articleToCreate, { withCredentials: true })
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