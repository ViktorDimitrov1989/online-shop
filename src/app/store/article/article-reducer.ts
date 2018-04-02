import { ArticleState } from "./article-state";

import { CREATE_ARTICLE, GET_ARTICLES, GET_ARTICLE_OPTIONS, CREATE_BRAND, FILTER_ARTICLES, CreateArticleAction, GetArticlesAction, GetArticleOptions, CreateBrandAction, CreateCategoryAction, CREATE_CATEGORY, FilterArticlesAction} from "./article-actions";
import { createFeatureSelector, createSelector } from "@ngrx/store";

const initialState: ArticleState = {
    allArticles: [],
    brands: [],
    colors: [],
    sizes: [],
    categories: []
}

export function articleReducer(state = initialState, 
    action: CreateArticleAction | GetArticlesAction | GetArticleOptions | CreateBrandAction | CreateCategoryAction | FilterArticlesAction): ArticleState {
  
      switch(action.type) {
        case CREATE_ARTICLE: {
          return state;
        }
        case GET_ARTICLES: {
          return Object.assign({}, state, {allArticles: action.articles, brands: state.brands, colors: state.colors, sizes: state.sizes, categories: state.categories});
        }
        case GET_ARTICLE_OPTIONS:{
          return Object.assign({}, state, {allArticles: state.allArticles, brands: action.brands, colors: action.colors, sizes: action.sizes, categories: action.categories})
        }
        case CREATE_BRAND:{
          return Object.assign({}, state, {allArticles: state.allArticles, brands: [...state.brands, action.brand], colors: state.colors, sizes: state.sizes, categories: state.categories})
        }
        case CREATE_CATEGORY:{
          return Object.assign({}, state, {allArticles: state.allArticles, brands: state.brands, colors: state.colors, sizes: state.sizes, categories: [...state.categories, action.category]})
        }
        case FILTER_ARTICLES:{
          return Object.assign({}, state, {allArticles: action.allArticles, brands: state.brands, colors: state.colors, sizes: state.sizes, categories: state.categories})
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

  
  
  export const getArticleState = createFeatureSelector<ArticleState>('articleState');
  
  export const getUsers = createSelector(
      getArticleState, 
      (state: ArticleState) => state
  ); 