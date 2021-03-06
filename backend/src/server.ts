import express from 'express';
import cors from 'cors';
import { router } from './routes';

import 'reflect-metadata'

const app = express();

import "./database"

app.use(cors());
app.use(express.json());
app.use(router)

app.listen(3333, () => console.log('Ouvindo'))