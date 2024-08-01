import timePlanner from '../db/models/timePlaner.js';

export const getAllPlanner = () => timePlanner.find();

export const getPlannerById = id => timePlanner.findById(id);
