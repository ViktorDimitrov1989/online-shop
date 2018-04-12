import { Action } from "@ngrx/store";

export const GET_BASKET = 'basket/GET_BASKET';

export class GetBasketAction implements Action {
    type: string = GET_BASKET;

    constructor(public basket: any){}
}






