import timePlaner from '../db/models/timePlaner.js';

export const getAllPlaner = () => timePlaner.find();

export const getPlanerById = id => timePlaner.findById(id);
