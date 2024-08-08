import Joi from 'joi';
import {
  dateSchema,
  inputTimeSchema,
  phoneNumberSchema,
} from '../constants/constant.js';

export const addLessonByPlanerSchema = Joi.object({
  name: Joi.string().required(),
  phoneNumber: Joi.string().pattern(phoneNumberSchema).required(),
  lessonTime: Joi.string().pattern(inputTimeSchema).required(),
  date: Joi.string().pattern(dateSchema).required(),
});
