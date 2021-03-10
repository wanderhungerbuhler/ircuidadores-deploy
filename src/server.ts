import 'reflect-metadata';

import 'dotenv/config';
import './database';

import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();
app.use(express.json());
app.use(cors());

app.use(routes);

app.listen(process.env.TYPEORM_PORT || 3333, () => {
  console.log('Server has been started!');
});
