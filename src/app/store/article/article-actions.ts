import { Action } from "@ngrx/store";

export const CREATE_ARTICLE = 'article/CREATE';
export const GET_ARTICLES = 'article/FIND_ALL';

export class CreateArticleAction implements Action {
    readonly type = CREATE_ARTICLE;

    constructor(public articletoCreate: any){}
}

export class GetArticlesAction implements Action {
    readonly type = GET_ARTICLES;

    constructor(public articles: any) { }
}



