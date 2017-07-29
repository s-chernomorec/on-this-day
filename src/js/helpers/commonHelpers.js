import merge from "lodash/merge";

const assign = (...objects) => merge({}, ...objects);

const isObject = obj => obj !== null && typeof obj === 'object';

const isDate = obj => Object.prototype.toString.call(obj) === '[object Date]';

const isInteger = num => typeof num === 'number' && Number.isFinite(num) && !(num % 1);

const capitalizeFirstLetter = str => typeof str === 'string' ? str.charAt(0).toUpperCase() + str.slice(1) : null;

const compareDates = (date1, date2) => (
  isDate(date1) && isDate(date2)
    ? date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth()
    : false
);

const sortByMonth = (obj1, obj2) => {
  const date1 = new Date(obj1.date);
  const date2 = new Date(obj2.date);

  if (date1.getMonth() === date2.getMonth()) {
    return date1.getDay() - date2.getDay()
  } else {
    return date1.getMonth() - date2.getMonth();
  }
}

export {assign, isObject, isDate, isInteger, compareDates, sortByMonth, capitalizeFirstLetter};
