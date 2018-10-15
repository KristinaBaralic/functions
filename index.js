const {random, minIntegerFromArray, minIntegerFromString, concatStringsByLength} = require('./function');
const {MIN, MAX, ARRAY, TEXT, STRINGS, TYPE} = require('./config');

console.log(random(MIN,MAX));
console.log(minIntegerFromArray(ARRAY));
console.log(minIntegerFromString(TEXT));
console.log(concatStringsByLength(STRINGS, TYPE));