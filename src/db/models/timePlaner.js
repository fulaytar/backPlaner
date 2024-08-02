import { Schema, model } from 'mongoose';
import {
  dateSchema,
  daySchema,
  inputTimeSchema,
  monthSchema,
  phoneNumberSchema,
  yearSchema,
} from '../../constants/constant.js';
//{name: 'Ствол смерти', phoneNumber: '+380664318305', lessonTime: '17-30', date: '2024-08-01'}

const timePlannerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    match: phoneNumberSchema,
  },
  lessonTime: {
    type: String,
    required: true,
    match: inputTimeSchema,
  },
  date: {
    type: String,
    required: true,
    match: dateSchema,
  },
  year: {
    type: String,
    required: true,
    match: yearSchema,
  },
  month: {
    type: String,
    required: true,
    match: monthSchema,
  },
  day: {
    type: String,
    required: true,
    match: daySchema,
  },
});

const timePlanner = model('timePlaner', timePlannerSchema);

export default timePlanner;
