import {isObject} from './commonHelpers';

const memoizeDateData = (data, field) => {
  return isObject(data) ? [...field, data] : [...field];
}

export {memoizeDateData};
