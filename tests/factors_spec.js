"use strict";

var factors = require('../functions/factors');
var log = require('../lib/colorLog');

var test1 = factors(100);
log.green(JSON.stringify(test1));

var test2 = factors(200);
log.green(JSON.stringify(test2));
