import { dateSchema, checkCurrentDaySchema } from '../constants/constant.js';

const checkDate = date => {
  //приклад 2023-08-12T00:00:00Z
  if (typeof date !== 'string') return;
  if (checkCurrentDaySchema.test(date)) {
    return date;
  }
};

const parsedLessonDate = ({ startDate, endDate }) => {
  const parsedStartDate = checkDate(startDate);
  const parsedEndDate = checkDate(endDate);

  return {
    startDate: parsedStartDate,
    endDate: parsedEndDate,
  };
};

export default parsedLessonDate;
