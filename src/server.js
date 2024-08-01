import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import env from './utils/env.js';
import { getAllPlaner, getPlanerById } from './services/timePlanerServices.js';

const setupServer = () => {
  const app = express();

  const PORT = env('PORT');

  const logger = pino({
    transport: {
      target: 'pino-pretty',
    },
  });

  app.use(cors());
  app.use(logger);

  app.get('/timeplaner', async (req, res) => {
    const allData = await getAllPlaner();
    //console.log(req.url);
    //console.log(req.method);
    res.status(200).send(allData);
  });

  app.get('/timeplaner/:id', async (req, res) => {
    const { id } = req.params;
    const dataById = await getPlanerById(id);

    if (!dataById) {
      throw Error('Sorry not found');
    }
    res.send(dataById);
  });

  app.use((req, res) => {
    res.status(404).json({
      status: 404,
      message: `Not found page from ${`http://localhost:${PORT}${req.url}`}`,
    });
  });

  app.listen(PORT, () => console.log(`Server running on port ${PORT} ...`));
};

export default setupServer;
