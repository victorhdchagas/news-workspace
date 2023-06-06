import NewsApi from 'newsapi';
import dotenv from 'dotenv';
import type { NewsApiParams } from '../types/news-api';

export class NewsController{
    private newsApi:any
    /**
     *
     */
    constructor() {
        dotenv.config()
        this.newsApi = new NewsApi(process.env.NEWS_API_KEY)        
    }
    async find(params:NewsApiParams){
        return await this.newsApi.v2.everything({
            ...params,
            pageSize:params.pageSize??10,
            page:params.page??1,
        });
        
    }
}