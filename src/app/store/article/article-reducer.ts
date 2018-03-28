import { ArticleState } from "./article-state";

import { CREATE_ARTICLE, GET_ARTICLES, GET_ARTICLE_OPTIONS, CreateArticleAction, GetArticlesAction, GetArticleOptions} from "./article-actions";
import { createFeatureSelector, createSelector } from "@ngrx/store";

const initialState: ArticleState = {
    allArticles: [],
    brands: [],
    colors: [],
    sizes: [],
    categories: []
}

export function articleReducer(state = initialState, 
    action: CreateArticleAction | GetArticlesAction | GetArticleOptions): ArticleState {
  
      switch(action.type) {
        case CREATE_ARTICLE: {
          return state;
        }
        case GET_ARTICLES: {
          return Object.assign({}, state, {allArticles: action.articles});
        }
        case GET_ARTICLE_OPTIONS:{
          return Object.assign({}, state, {brands: action.brands, colors: action.colors, sizes: action.sizes, categories: action.categories})
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