import { ActionReducerMap, ActionReducer, MetaReducer } from "@ngrx/store";
import { AppState } from "./app-state";
import { userReducer } from "./user/user-reducer";
import { articleReducer } from "./article/article-reducer";
import { environment } from "../../environments/environment";
import { basketReducer } from "./basket/basket-reducer";

export const reducers: ActionReducerMap<AppState> = {
    userState: userReducer,
    articleState: articleReducer,
    basketState: basketReducer
};

// export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
//     return function (state: AppState, action: any): AppState {
//         console.log('state', state);
//         console.log('action', action);
//         return reducer(state, action);
//     };
// }

// export const metaReducers: MetaReducer<AppState>[] = !environment.production
//     ? [logger]
//     : []; 