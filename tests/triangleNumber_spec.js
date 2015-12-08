"use strict";

var triangleNumber = require('../functions/triangleNumber');
var log = require('../lib/colorLog');

var test1 = triangleNumber(7);
log.green(JSON.stringify(test1));

var test2 = triangleNumber(20);
log.green(JSON.stringify(test2));

// some clever logging reveals that once generated a triangle number does not have to get generated again.
var test3 = triangleNumber(5);
log.green(JSON.stringify(test3));
