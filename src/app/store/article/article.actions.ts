import { Injectable } from "@angular/core";
import { NgRedux } from 'ng2-redux';
import { IArticleState } from "./IArticleState";
import { ArticleService } from "../../services/article/article.service";


export const FILTER_CLOTHES = 'clothes/FILTER';
export const REQUEST_ARTICLES_SUCCESS = 'articles/REQUEST_SUCCESS';

@Injectable()
export class ArticleActions {

    constructor(private ngRedux: NgRedux<IArticleState>,
    private articleService: ArticleService) {
    }

    getClothes(){
        // return this.articleService
        //     .getArticles()
        //     .subscribe(articles => {
        //         this.ngRedux.dispatch({
        //             type: REQUEST_ARTICLES_SUCCESS,
        //             articles
        //         })
        //     })
    }

    filterClothes(searchBrand: string) {
        this.ngRedux.dispatch({
            type: FILTER_CLOTHES,
            searchBrand
        });
    }

}