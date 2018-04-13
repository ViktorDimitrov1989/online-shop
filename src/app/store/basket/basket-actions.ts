import { Action } from "@ngrx/store";

export const GET_BASKET = 'basket/GET_BASKET';
export const CLEAR_BASKET = 'basket/CLEAR_BASKET';
export const ADD_BASKET_ARTICLE = 'basket/ADD_ARTICLE';
export const REMOVE_BASKET_ARTICLE = 'basketArticle/REMOVE_ARTICLE';
export const INCREASE_BASKET_ARTICLE_QUANTITY = 'basketArticle/INCREASE_BASKET_ARTICLE_QUANTITY';
export const DECREASE_BASKET_ARTICLE_QUANTITY = 'basketArticle/DECREASE_BASKET_ARTICLE_QUANTITY';

export class GetBasketAction implements Action {
    type: string = GET_BASKET;

    constructor(public basket: any){}
}

export class ClearBasketAction implements Action {
    type: string = CLEAR_BASKET;

    constructor(public basket: any){}
}

export class AddBasketArticleAction implements Action {
    type: string = ADD_BASKET_ARTICLE;

    constructor(public basket: any){}
}

export class RemoveBasketArticleAction implements Action {
    type: string = REMOVE_BASKET_ARTICLE;

    constructor(public basket: any){}
}

export class IncreaseBasketArticleQuantityAction implements Action {
    type: string = INCREASE_BASKET_ARTICLE_QUANTITY;

    constructor(public basket: any){}
}

export class DecreaseBasketArticleQuantityAction implements Action {
    type: string = DECREASE_BASKET_ARTICLE_QUANTITY;

    constructor(public basket: any){}
}







