import { Action } from "@ngrx/store";

export const CREATE_ARTICLE = 'article/CREATE';
export const GET_ARTICLES = 'article/FIND_ALL';
export const GET_ARTICLE_OPTIONS = 'article/OPTIONS';

export class CreateArticleAction implements Action {
    readonly type = CREATE_ARTICLE;

    constructor(public articletoCreate: any){}
}

export class GetArticlesAction implements Action {
    readonly type = GET_ARTICLES;

    constructor(public articles: any) { }
}

export class GetArticleOptions implements Action{
    readonly type = GET_ARTICLE_OPTIONS;

    constructor(public brands: any[],public colors: any[],public sizes: any[],public categories: any[]){}
}


