import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import env from './utils/env.js';
import plannerRouter from './routers/planer_router.js';
import notFoundPage from './middlewares/notFoundPage.js';
import errorHandler from './middlewares/errorHandler.js';

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

  app.use('/timeplanner', plannerRouter);

  app.use('*', notFoundPage);
  app.use(errorHandler);

  app.listen(PORT, () => console.log(`Server running on port ${PORT} ...`));
};

export default setupServer;

/* наразі на 3 лекції */
