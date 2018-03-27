import { ArticleState } from "./article-state";

import { CREATE_ARTICLE, GET_ARTICLES, CreateArticleAction, GetArticlesAction} from "./article-actions";
import { createFeatureSelector, createSelector } from "@ngrx/store";

const initialState: ArticleState = {
    allArticles: []
}

export function articleReducer(state = initialState, 
    action: CreateArticleAction | GetArticlesAction): ArticleState {
  
      switch(action.type) {
        case CREATE_ARTICLE: {
          return state;
        }
        case GET_ARTICLES: {
          return Object.assign({}, state, {allArticles: action.articles});
        }
        default: {
          return state;
        }
      }	
  } 
  
  export const getArticleState = createFeatureSelector<ArticleState>('articleState');
  
  export const getUsers = createSelector(
      getArticleState, 
      (state: ArticleState) => state
  ); 