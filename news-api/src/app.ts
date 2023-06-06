import express from 'express';
import bodyParser from 'body-parser';
import newsRouter from './routes/news.route'
import cors from 'cors';
const app = express();
app.use(bodyParser.json())
app.use(cors())
app.use('/news',newsRouter)


export default app;