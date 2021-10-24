import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

dotenv.config();

const PORT = process.env.PORT || process.env.PORT_DEFAULT;
const DB_URL = process.env.DB_URL;

const app = express();

app.use(cors());

mongoose
  .connect(DB_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
    });
  })
  .error((err) => console.error(err));
