//In the program we use lodash module
const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
//flattenDeep is a method of lodash
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log("Hello world!");