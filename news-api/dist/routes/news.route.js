"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const news_controller_1 = require("../controller/news-controller");
const router = (0, express_1.Router)();
router.get("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.query;
    console.log('requesting', params);
    const newsController = new news_controller_1.NewsController();
    if (!params.q)
        return res.json({ "message": "nothing found" });
    const toReturn = yield newsController.find(params);
    // if(toReturn.status == "ok")
    //     return res.send(toReturn.articles.map((article:any)=>({...article, publishedAt: new Date(article.publishedAt)})))
    res.send(toReturn);
}));
exports.default = router;
