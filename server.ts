import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';
import indexRouter from './src/router';

dotenv.config();

const { PORT } = process.env;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
