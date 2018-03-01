import { 
    createStore, 
    applyMiddleware, 
    compose, 
    GenericStoreEnhancer 
  } from 'redux';
import { articleReducer } from './article.reducer';
import { IArticleState } from '..';

  
  declare var window: any;
  const devToolsExtension: GenericStoreEnhancer = (window.devToolsExtension)
    ? window.devToolsExtension() : (f) => f;
  
  export const store = createStore<IArticleState>(
    articleReducer,
    compose(devToolsExtension) as GenericStoreEnhancer);
  