import { Action } from "@ngrx/store";

export const CREATE_ARTICLE = 'article/CREATE';
export const GET_ARTICLES = 'article/FIND_ALL';
export const GET_ARTICLE_OPTIONS = 'article/OPTIONS';
export const CREATE_BRAND = "article/CREATE_BRAND";
export const CREATE_CATEGORY = "article/CREATE_CATEGORY";
export const FILTER_ARTICLES = "article/FILTER";
export const GET_ADVERTS = 'article/GET_ADVERTS';

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


export class CreateBrandAction implements Action{
    readonly type = CREATE_BRAND;

    constructor(public brand){};
}

export class CreateCategoryAction implements Action{
    readonly type = CREATE_CATEGORY;

    constructor(public category){};
}

export class FilterArticlesAction implements Action {
    readonly type = FILTER_ARTICLES;

    constructor(public allArticles: any[], public page, public size, public filters){};
}

export class GetAdvertsAction implements Action {
    readonly type = GET_ADVERTS;

    constructor(public adverts: any[]) { }
}




