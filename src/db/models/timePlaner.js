import { Schema, model } from 'mongoose';
import {
  dateSchema,
  daySchema,
  inputTimeSchema,
  monthSchema,
  phoneNumberSchema,
  yearSchema,
} from '../../constants/constant.js';

const timePlannerSchema = new Schema(
  {
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
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const timePlanner = model('timePlaner', timePlannerSchema);

export default timePlanner;
