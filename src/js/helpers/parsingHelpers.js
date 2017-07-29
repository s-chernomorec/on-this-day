const monthAsString = month => {
  switch (month) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "November";
    case 11:
      return "December";
  }
};

const getUrlByDate = date => {
  const day = date.getDate();
  const month = monthAsString(date.getMonth());
  return `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&titles=${month}%20${day}&redirects=true&origin=*`;
};

const getPages = _pages => {
  let pages = [];
  for (let i in _pages) {
    pages.push(_pages[i]);
  }
  return pages;
};

const matchWithStrLength = (str, rgx, position = 0) => (
  str.search(rgx) + str.match(rgx)[position].length
);

const sectionTitleRegexp = (id, flags) => (
  new RegExp(
    '(</ul>)?<h2><span.+id="' + id + '".+</span></h2>(\r\n?|\n)(<ul>)?',
    flags
  )
);

const parseSection = (content, startId, endId) => {
  const startRegex = sectionTitleRegexp(startId, "gmi");
  const endRegex = sectionTitleRegexp(endId, "gmi");

  const start = matchWithStrLength(content, startRegex);
  const end = content.search(endRegex);

  return content.slice(start, end);
};

const getDescription = (content, trimBoldTag = true) => {
  let paragraph = content.match(/<p>.+<\/p>/)[0];
  if (trimBoldTag) {
    paragraph = paragraph.replace(/<\/?b>/g, "");
  }
  return paragraph.replace(/<\/?p>/gi, "");
};

const getSection = (content, startId, endId) => (
  parseSection(content, startId, endId)
    .replace(/<ul>((?!ul).|\r\n?|\n)+<\/ul>/gim, "")
    .replace(/<li>|(\r\n?|\n)/gi, "")
    .replace(/((?!<\/li>)<\/?\w+)>/gi, "")
    .split("</li>")
    .filter(item => item)
);

const parseData = data => ({
  events: getSection(data, "events", "births"),
  births: getSection(data, "births", "deaths"),
  deaths: getSection(data, "deaths", "Holidays_and_observances")
});

const parseEvent = data => {
  let event;
  try {
    event = {
      year: data.match(/^[0-9A-Z ]{0,7} ?(–|-) ?/)[0].replace(/ ?(–|-) ?/, ''),
      text: data.replace(/^[0-9A-Z ]{0,7} ?(–|-) ?/, '')
    }
  } catch(e) {
    return null
  }
  return event;
};

export {monthAsString, getUrlByDate, getPages, parseData, getDescription, parseEvent};
