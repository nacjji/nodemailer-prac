import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';
import DatabaseManager from './module/db_connect';
import indexRouter from './router';

dotenv.config();

const { PORT } = process.env;
const app = express();

const dbConnect = new DatabaseManager();

dbConnect.getConnection();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
