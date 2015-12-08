"use strict";

var bubbleSort = require('../functions/bubbleSort');
var arr = [1,2,3,4,5,6,7,8,2];
var testArr = bubbleSort(arr);

console.log(testArr);

arr = [8,1,2,3,4,5,6,7,8];
testArr = bubbleSort(arr);

console.log(testArr);

