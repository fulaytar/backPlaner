import { Schema, model } from 'mongoose';
import {
  dateSchema,
  inputTimeSchema,
  phoneNumberSchema,
} from '../../constants/constant.js';
import { mongooseSaveErrorModel, mongooseSetUpdateSettings } from '../hooks.js';

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
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

//спрацює для додавання
timePlannerSchema.post('save', mongooseSaveErrorModel);

//краща практика
timePlannerSchema.pre('findOneAndUpdate', mongooseSetUpdateSettings);

//оновлення
timePlannerSchema.post('findOneAndUpdate', mongooseSaveErrorModel);

const timePlanner = model('timePlaner', timePlannerSchema);

export default timePlanner;
