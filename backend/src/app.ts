import express from'express';
import path from'path';
import cookieParser from'cookie-parser';
import logger from'morgan';
import cors from'cors';
import indexRouter from'./routes/index';
import moods from'./routes/moods';

export const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/moods', moods);
