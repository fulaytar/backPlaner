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

export const getPlannerByIdControler = async (req, res) => {
  const { id } = req.params;
  const dataById = await getPlannerById(id);

  if (!dataById) {
    return res.status(404).send({
      status: 404,
      message: `Sorry, not found ${id}`,
    });
  }

  res.status(200).send({
    status: 200,
    message: `Successfully found ${id}`,
    data: dataById,
  });
};
