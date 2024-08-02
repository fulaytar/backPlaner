import express from 'express';
import {
  getAllPlannerController,
  getPlannerByIdController,
} from '../controllers/getPlanerController.js';
import decoratorBody from '../utils/decoratorBody.js';
import isValidId from '../middlewares/isValidId.js';

const plannerRouter = express.Router();

plannerRouter.get('/', decoratorBody(getAllPlannerController));

plannerRouter.get('/:id', isValidId, decoratorBody(getPlannerByIdController));

export default plannerRouter;
