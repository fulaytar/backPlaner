import { sortDateList, sortOrderList } from '../constants/constant.js';
//export const sortDateList = [1, -1];  // по зростанню, по спаданню sortDateList

//sortOrder - порядок
//sortBy -по якому саме полю

const parseSortParams = ({ sortBy, sortOrder }, fieldList) => {
  let parsedSortOrder;
  let parsedSortBy;

  if (sortBy === 'date') {
    const numericSortOrder = parseInt(sortOrder);
    parsedSortOrder = sortDateList.includes(numericSortOrder)
      ? numericSortOrder
      : sortDateList[1];
    parsedSortBy = 'date';
  } else {
    parsedSortOrder = sortOrderList.includes(sortOrder)
      ? sortOrder
      : sortOrderList[0];
    parsedSortBy = fieldList.includes(sortBy) ? sortBy : fieldList[0];
  }

  return {
    sortBy: parsedSortBy,
    sortOrder: parsedSortOrder,
  };
};

export default parseSortParams;
