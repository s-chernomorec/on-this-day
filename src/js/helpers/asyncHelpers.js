import axios from 'axios';
import {getUrlByDate, getPages, parseData, getDescription} from './parsingHelpers';

const loadData = (date, callback) => {
  axios
  .get(getUrlByDate(date))
  .then((res) => {
    const page = getPages(res.data.query.pages)[0];
    const pageContent = page.extract;
    const dateData = {
      data: parseData(pageContent),
      description: getDescription(pageContent),
      date: date
    }

    callback(dateData);

  }).catch((error) => {
    console.log(error);
  });
};

export {loadData};
