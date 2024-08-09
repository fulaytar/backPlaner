export const phoneNumberSchema = /^\+\d{1,3}\d{7,14}$/;
export const inputTimeSchema = /^\d{2}:\d{2}$/;
export const dateSchema = /^\d{4}-\d{2}-\d{2}$/;
export const checkCurrentDaySchema = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/;
export const daySchema = /^(0[1-9]|[12][0-9]|3[01])$/;
export const monthSchema = /^(0[1-9]|1[0-2])$/;
export const yearSchema = /^\d{4}$/;
export const sortOrderList = ['asc', 'desc'];
export const sortDateList = [1, -1]; // по зростанню, по спаданню
export const lessonFiledList = [
  '_id',
  'name',
  'phoneNumber',
  'lessonTime',
  'date',
  'createdAt',
  'updatedAt',
];
