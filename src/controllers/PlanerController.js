import createHttpError from 'http-errors';
import {
  addLessonByPlanner,
  deleteLessonById,
  getAllPlanner,
  getPlannerById,
  updateLessonById,
} from '../services/timePlanerServices.js';
import parsePaginationParams from '../utils/parsePaginationParams.js';
import parseSortParams from '../utils/parseSortParams.js';
import { lessonFiledList } from '../constants/constant.js';
import parsedLessonDate from '../utils/parsedLessonDate.js';

export const getAllPlannerController = async (req, res) => {
  const { query } = req;
  //console.log(req.query);
  const { page, perPage } = parsePaginationParams(query);
  const { sortBy, sortOrder } = parseSortParams(query, lessonFiledList);
  const filter = parsedLessonDate(query);
  //console.log(filter); //{ startDate: undefined, endDate: undefined }
  // цей момент доробити
  const allData = await getAllPlanner({
    page,
    perPage,
    sortBy,
    sortOrder,
    filter,
  });

  res.status(200).json({
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

export const addPlannerController = async (req, res) => {
  const newLesson = await addLessonByPlanner(req.body);

  res.status(201).json({
    status: 201,
    message: 'Add new lesson successfully!',
    data: newLesson,
  });
};

export const updateLessonByIdController = async (req, res) => {
  const { id } = req.params;
  const data = await updateLessonById({ _id: id }, req.body, { upsert: true });

  const status = data.isNew ? 201 : 200;
  const message = data.isNew ? 'Lesson add success' : 'Lesson update success';

  res.json({
    status,
    message,
    data: data.value,
  });
};

export const patchLessonByIdController = async (req, res) => {
  const { id } = req.params;
  const result = await updateLessonById({ _id: id }, req.body);

  if (!result) {
    throw createHttpError(404, `Lesson with id=${id} not found`);
  }

  res.json({
    status: 200,
    message: 'Lesson update success',
    data: result.data,
  });
};

export const deleteLessonByIdController = async (req, res) => {
  const { id } = req.params;
  const result = await deleteLessonById({ _id: id });

  if (!result) {
    throw createHttpError(404, `Lesson with id=${id} not found`);
  }

  res.json({
    status: 200,
    message: `Lesson by id=${id} deleted!`,
    data: result,
  });
};
