import { UserState } from "./user/user-state";
import { ArticleState } from "./article/article-state";

export interface AppState{
    userState: UserState,
    articleState: ArticleState
}