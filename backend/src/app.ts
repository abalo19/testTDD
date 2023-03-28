import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';


// Charger les variables d'environnement
dotenv.config();

// Initialiser l'application Express
export const app: Application = express();

// Configurer les middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Définir la route d'accueil
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Stock Market API!');
});

