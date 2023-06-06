import { Router } from "express";
import { NewsApiParams } from "../types/news-api";
import { NewsController } from "../controller/news-controller";

const router = Router();

router.get("/",async (req,res,next)=>{
    const params = req.query as unknown as  NewsApiParams;
    const newsController = new NewsController();
    if(!params.q) return res.json({"message":"nothing found"})
    const toReturn = await newsController.find(params)
    res.send(toReturn)
})

export default router