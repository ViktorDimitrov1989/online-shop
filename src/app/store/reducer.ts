import { IArticleState } from "./IArticleState";
import { FILTER_CLOTHES, REQUEST_ARTICLES_SUCCESS } from '../store/article.actions';

const articles = [
    { id: 1, type: 't-shirt', brand: 'nike', picture: 'nike.jpg' },
    { id: 2, type: 'throwsers', brand: 'nike', picture: 'nike-th.jpg' },
    { id: 3, type: 'hat', brand: 'adidas', picture: 'adidas.jpg' },
];

const initialState: IArticleState = {
    articles: articles,
    filteredArticles: articles
}

function filterClothes(state, action) {
    return Object.assign({}, state, {
        filteredClothes: state.articles.filter(c => {
            return c.brand.toLowerCase()
                .indexOf(action.searchBrand.toLowerCase()) > -1
        })
    })
}

function getArticles(state, action){
    return Object.assign({}, state, {
        articles: action.articles,
        filteredArticles: action.articles
    })
}


export function reducer(state = initialState, action) {

    switch (action.type) {
        case FILTER_CLOTHES:
            return filterClothes(state, action);
        case REQUEST_ARTICLES_SUCCESS:
            return getArticles(state, action);
        default:
            return state;
    }
}