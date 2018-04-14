import { BasketState } from './basket-state';
import { GET_BASKET, CLEAR_BASKET, ADD_BASKET_ARTICLE, REMOVE_BASKET_ARTICLE, INCREASE_BASKET_ARTICLE_QUANTITY, DECREASE_BASKET_ARTICLE_QUANTITY, GetBasketAction, ClearBasketAction, RemoveBasketArticleAction, IncreaseBasketArticleQuantityAction, DecreaseBasketArticleQuantityAction } from './basket-actions';
import { createFeatureSelector, createSelector } from "@ngrx/store";

const initialState: BasketState = {
    loggedUserBasket: {}
}


export function basketReducer(state = initialState,
    action: GetBasketAction | ClearBasketAction | RemoveBasketArticleAction | IncreaseBasketArticleQuantityAction | DecreaseBasketArticleQuantityAction | RemoveBasketArticleAction): BasketState {

    switch (action.type) {
        case GET_BASKET: {
            return Object.assign({}, state, {
                loggedUserBasket: action.basket
            });
        }
        case CLEAR_BASKET: {
            return Object.assign({}, state, {
                loggedUserBasket: action.basket
            });
        }
        case ADD_BASKET_ARTICLE: {
            return Object.assign({}, state, {
                loggedUserBasket: action.basket
            });
        }
        case REMOVE_BASKET_ARTICLE: {
            return Object.assign({}, state, {
                loggedUserBasket: action.basket
            });
        }
        case INCREASE_BASKET_ARTICLE_QUANTITY: {
            return Object.assign({}, state, {
                loggedUserBasket: action.basket
            });
        }
        case DECREASE_BASKET_ARTICLE_QUANTITY: {
            return Object.assign({}, state, {
                loggedUserBasket: action.basket
            });
        }
        default: {
            return state;
        }
    }

    // function filterArticles(filters: any[]){
    //   return state.allArticles.colors.includes(filters.brand.name) 
    //     && o.sizes.some(r => sizesFilter.includes(r));
    // }
}


export const getBasketState = createFeatureSelector<BasketState>('basketState');