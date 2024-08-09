import timePlanner from '../db/models/timePlaner.js';
import calcPaginationData from '../utils/calcPaginationData.js';

export const getAllPlanner = async ({
  page = 1,
  perPage = 10,
  sortBy = '_id',
  sortOrder = 'asc',
}) => {
  const skip = (page - 1) * perPage;
  const totalItems = await timePlanner.countDocuments();
  const items = await timePlanner
    .find()
    .skip(skip)
    .limit(perPage)
    .sort({ [sortBy]: sortOrder });

  const { hasNextPage, hasPrevPage, totalPages } = calcPaginationData({
    total: totalItems,
    page,
    perPage,
  });
  return {
    items,
    totalItems,
    page,
    perPage,
    totalPages,
    hasPrevPage,
    hasNextPage,
  };
};

export const getPlannerById = id => timePlanner.findById(id);

export const addLessonByPlanner = data => timePlanner.create(data);

export const updateLessonById = async (filter, data, options = {}) => {
  const result = await timePlanner.findOneAndUpdate(filter, data, {
    /* new: true,
    runValidators: true, */
    includeResultMetadata: true,
    ...options,
  });

  if (!result || !result.value) return null;

  return {
    data: result.value,
    isNew: Boolean(result?.lastErrorObject?.upserted),
  };
};

export const deleteLessonById = async filter =>
  timePlanner.findOneAndDelete(filter);
