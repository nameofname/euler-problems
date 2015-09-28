/**
 * Finds all the unique combinations of n numbers (slots) in an array. Returns an array of the unique combinations.
 * @param arr
 * @param slots
 */

// First , code for a static number of spots.
// Later I will use recursion to get the number of spots desired

var log = require('../lib/colorLog');

//var arr = [1, 2, 3, 4, 5];
//var combos = [];
//
//for (var first = 0; first < arr.length; first++) {
//    for (var second = (first+1); second < arr.length; second++) {
//        for (var third = (second+1); third < arr.length; third++) {
//            var combo = [arr[first], arr[second], arr[third]];
//            combos.push(combo);
//        }
//    }
//}













var startingArr;
var desiredSpots = 0;

var combinations = [];
var currCombo = [];
//var lastIndex = 0;
//var spotIndex = -1;

var _buildUniques = function (lastIndex, spotIndex) {

    log.green('build uniques from', lastIndex, 'to', startingArr.length);

    // todo - use the last index from curr combo to get last index, this way is busted.
    for (var index = (lastIndex + 1); index < startingArr.length; index++) {

        log.blue('inner loop. ', index);

        // here -- curr combo gets pushed index but only at the level you are at re: spot to push to.
        currCombo[spotIndex] = startingArr[index];

        // if we are on the bottom level, push the combined array
        if (spotIndex === (desiredSpots - 1)) {

            log('at the bottom, push combo', currCombo);
            combinations.push(currCombo.slice()); // use slice to get clone

            // otherwise, level down.
        } else {

            // todo : you cant always set the curr index like this...

            log.red('not at the bottom yet... level down', lastIndex);
            lastIndex = index;
            _buildUniques(lastIndex, (spotIndex + 1));
        }

    }
};

/**
 *
 * @param arr - The array to get unique values from
 * @param spots - the number of spots in each unique combination.
 */
var getUniques = function (arr, spots) {
    if (spots > arr.length) {
        throw new Error('Invalid function call to uniqueCombinations. Asked for ' + spots + ' spots from array of ' +
        'length ' + arr.length);
    }

    startingArr = arr;
    desiredSpots = spots;

    _buildUniques(-1, 0);
    return combinations;
};


var test = getUniques([1,2,3,4,5], 3);

log.green(JSON.stringify(test));

