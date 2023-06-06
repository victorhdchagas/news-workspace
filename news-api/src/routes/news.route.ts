import { Router } from "express";
import { NewsApiParams } from "../types/news-api";
import { NewsController } from "../controller/news-controller";

const router = Router();

router.get("/",async (req,res,next)=>{
    const params = req.query as unknown as  NewsApiParams;
    console.log('requesting',params)
    const newsController = new NewsController();
    if(!params.q) return res.json({"message":"nothing found"})
    const toReturn = await newsController.find(params)
    // if(toReturn.status == "ok")
    //     return res.send(toReturn.articles.map((article:any)=>({...article, publishedAt: new Date(article.publishedAt)})))
    res.send(toReturn)
})

export default router