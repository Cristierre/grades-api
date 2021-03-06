import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {gradeRouter} from './routes/gradeRouter.js'

import { db } from './models/index.js';

(async () => {
  try {
    await db.mongoose.connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    process.exit();
  }
})();

// const app = express();

//define o dominio de origem para consumo do servico
gradeRouter.use(bodyParser.json());
gradeRouter.use(bodyParser.urlencoded({ extended: true }));
gradeRouter.use(
  cors({
    origin: 'https://fronte-grades.herokuapp.com/',
  })
);

gradeRouter.listen(process.env.PORT || 8081, () => {});
