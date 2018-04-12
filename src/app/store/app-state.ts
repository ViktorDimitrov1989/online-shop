import { UserState } from "./user/user-state";
import { ArticleState } from "./article/article-state";
import { BasketState } from "./basket/basket-state";

export interface AppState{
    userState: UserState,
    articleState: ArticleState,
    basketState: BasketState
}