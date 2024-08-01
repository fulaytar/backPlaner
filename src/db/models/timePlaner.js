import { Schema, model } from 'mongoose';
import {
  dateSchema,
  inputTimeSchema,
  phoneNumberSchema,
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
});

const timePlanner = model('timePlaner', timePlannerSchema);

export default timePlanner;
