import express from 'express';
import {
  addPlannerController,
  deleteLessonByIdController,
  getAllPlannerController,
  getPlannerByIdController,
  patchLessonByIdController,
  updateLessonByIdController,
} from '../controllers/PlanerController.js';
import decoratorBody from '../utils/decoratorBody.js';
import isValidId from '../middlewares/isValidId.js';
import validateBody from '../utils/validateBody.js';
import {
  addLessonSchema,
  updateLessonSchema,
} from '../validation/planerSchema.js';

const plannerRouter = express.Router();

plannerRouter.get('/', decoratorBody(getAllPlannerController));

plannerRouter.get('/:id', isValidId, decoratorBody(getPlannerByIdController));

plannerRouter.post(
  '/',
  validateBody(addLessonSchema),
  decoratorBody(addPlannerController)
);

plannerRouter.put(
  '/:id',
  isValidId,
  validateBody(addLessonSchema),
  decoratorBody(updateLessonByIdController)
);

plannerRouter.patch(
  '/:id',
  isValidId,
  validateBody(updateLessonSchema),
  decoratorBody(patchLessonByIdController)
);

plannerRouter.delete(
  '/:id',
  isValidId,
  decoratorBody(deleteLessonByIdController)
);

export default plannerRouter;
