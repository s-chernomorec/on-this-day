import * as common from './commonHelpers';
import * as parsing from './parsingHelpers';
import * as memoization from './memoizationHelpers';
import * as asynchronous from './asyncHelpers';
import LS from './localStorageHelpers';

const helpers = {...common, ...parsing, ...memoization, ...asynchronous, LS};

export default helpers;
