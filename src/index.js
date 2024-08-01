import initMongoDB from './db/initMongoDB.js';
import setupServer from './server.js';

const startServer = async () => {
  await initMongoDB();
  setupServer();
};

startServer();
