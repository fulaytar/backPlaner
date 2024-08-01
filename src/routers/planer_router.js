import express from 'express';
import {
  getAllPlannerController,
  getPlannerByIdControler,
} from '../controllers/getPlanerController.js';

const plannerRouter = express.Router();

plannerRouter.get('/', getAllPlannerController);

plannerRouter.get('/:id', getPlannerByIdControler);

export default plannerRouter;
