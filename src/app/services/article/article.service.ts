import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ArticleService{

    constructor(private http: HttpClient){
        
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