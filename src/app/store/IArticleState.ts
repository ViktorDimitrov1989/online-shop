import Article from "../models/article";

export interface IArticleState{
    articles: Article[],
    filteredArticles: Article[]
}