import createHttpError from 'http-errors';
import {
  getAllPlanner,
  getPlannerById,
} from '../services/timePlanerServices.js';

export const getAllPlannerController = async (req, res) => {
  const allData = await getAllPlanner();

  res.status(200).send({
    status: 200,
    message: `Successfully found all planner`,
    data: allData,
  });
};

export const getPlannerByIdController = async (req, res) => {
  const { id } = req.params;
  const dataById = await getPlannerById(id);

  if (!dataById) {
    throw createHttpError(404, `Sorry, not found ${id}`);
  }

  res.status(200).send({
    status: 200,
    message: `Successfully found ${id}`,
    data: dataById,
  });
};
