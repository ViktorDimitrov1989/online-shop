import { BasketState } from './basket-state';
import { GET_BASKET, GetBasketAction } from './basket-actions';
import { createFeatureSelector, createSelector } from "@ngrx/store";

const initialState: BasketState = {
    loggedUserBasket: {}
}


export function basketReducer(state = initialState,
    action: GetBasketAction): BasketState {

    switch (action.type) {
        case GET_BASKET: {
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