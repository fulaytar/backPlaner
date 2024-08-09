import timePlanner from '../db/models/timePlaner.js';
import calcPaginationData from '../utils/calcPaginationData.js';

export const getAllPlanner = async ({
  filter,
  page = 1,
  perPage = 10,
  sortBy = '_id',
  sortOrder = 'asc',
}) => {
  const { startDate, endDate } = filter; //{ startDate: undefined, endDate: undefined } фільтр
  const skip = (page - 1) * perPage; //к-сть пропущених сторінок
  let items;
  const request = timePlanner.find(); //збережений проміс
  let totalItems;

  if (startDate && endDate) {
    //якщо у фільтрі присутні 2 дати
    items = await request
      .where('date')
      .gte(startDate)
      .lt(endDate)
      .skip(skip)
      .limit(perPage)
      .sort({ [sortBy]: sortOrder });
    totalItems = await timePlanner.find().merge(request).countDocuments();
    console.log(totalItems, '1------------');
  } else if (startDate) {
    //якщо у фільтрі присутня 1 дата
    const date = new Date(startDate);

    // Додаємо 1 день (24 години)
    date.setUTCDate(date.getUTCDate() + 1);
    const newDateString = date.toISOString();

    items = await request
      .where('date')
      .gte(startDate)
      .lt(newDateString)
      .skip(skip)
      .limit(perPage)
      .sort({ [sortBy]: sortOrder });
    totalItems = await timePlanner.find().merge(request).countDocuments();
    console.log(totalItems, '--------02');
  } else {
    //без фільтра

    totalItems = await timePlanner.find().countDocuments();
    console.log(totalItems, '3--------');
    items = await timePlanner
      .find()
      .skip(skip)
      .limit(perPage)
      .sort({ [sortBy]: sortOrder });
  }
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
