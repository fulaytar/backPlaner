import Joi from 'joi';

import {
  dateSchema,
  inputTimeSchema,
  phoneNumberSchema,
} from '../constants/constant.js';

export const addLessonSchema = Joi.object({
  name: Joi.string().required(),
  phoneNumber: Joi.string().pattern(phoneNumberSchema).required(),
  lessonTime: Joi.string().pattern(inputTimeSchema).required(),
  date: Joi.string().pattern(dateSchema).required(),
});

export const updateLessonSchema = Joi.object({
  name: Joi.string(),
  phoneNumber: Joi.string().pattern(phoneNumberSchema),
  lessonTime: Joi.string().pattern(inputTimeSchema),
  date: Joi.string().pattern(dateSchema),
});
