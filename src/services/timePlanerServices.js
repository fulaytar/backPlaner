import timePlanner from '../db/models/timePlaner.js';

export const getAllPlanner = () => timePlanner.find();

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
