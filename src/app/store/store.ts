import { 
    createStore, 
    applyMiddleware, 
    compose, 
    GenericStoreEnhancer 
  } from 'redux';
  import { reducer } from './reducer';
  import { IArticleState } from './IArticleState';
  
  declare var window: any;
  const devToolsExtension: GenericStoreEnhancer = (window.devToolsExtension)
    ? window.devToolsExtension() : (f) => f;
  
  export const store = createStore<IArticleState>(
    reducer,
    compose(devToolsExtension) as GenericStoreEnhancer);
  