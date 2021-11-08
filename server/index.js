import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

dotenv.config();

const PORT = process.env.PORT || process.env.PORT_DEFAULT;
const DB_URL = process.env.DB_URL;

const app = express();

app.use(cors());

//GET POST PUT DELETE PATCH

mongoose
  .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
    });
  })
  .catch((err) => console.error(err));
