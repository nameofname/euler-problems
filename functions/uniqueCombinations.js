"use strict";

/**
 * Gets all possible unique combinations of N "spots" from an array.
 *
 * @param array - The array to get unique values from
 * @param spots - the number of spots in each unique combination. The number of spots must be less than the length
 *      of the array.
 * For example, if you wanted to get all the unique combinations of 2 from the array [1, 2, 3] -- you would do :
 *      getUniques([1, 2, 3], 2)
 * That would return an array of arrays like :
 *  [
 *      [1, 2],
 *      [1, 3],
 *      [2, 3]
 *  ]
 *  For a detailed description of how this method works, see the below description of the
 *  recursive function _buildUniques.
 */
var getUniques;

var _buildUniques;
var startingArr;
var desiredSpots = 0;
var currCombo = [];
var combinations = [];

// the getUniques method is the exported function.
// all it does is set up the global variables and trigger _buildUniques which figures out all the unique combinations
// by recursion.
getUniques = function (array, spots) {
    if (spots > array.length) {
        throw new Error('Invalid function call to uniqueCombinations. Asked for ' + spots + ' spots from arrayay of ' +
        'length ' + array.length);
    }

    // set the global variables
    startingArr = array;
    desiredSpots = spots;

    _buildUniques(-1, 0);
    return combinations;
};

/**
 * This private method actually builds the unique combinations.
 *
 * To start, we don't know how many spots are desired in the output combinations, so this method uses recursion
 * to continue building unique combos.
 *
 * In each recursion, I loop up to the length of the array from the last used index. This works because you can't make
 * a unique combination from a lower index if you are iterating up to the top of the array. For example, you would
 * count like :
 *      1 - 2 - 3
 *      1 - 2 - 4
 *      1 - 2 - 5
 * If you used a lower index, then the combination would not be unique.
 *
 * The lastIndex argument is needed in the recursion to control the for loop as described above.
 *
 * The spotIndex argument is how the recursive function knows what spot you are currently filling in the output
 * combination. Taking the example from above, in the set 1 - 3 - 4, the number 1 is in the 1 spot, 3 is in the 2 spot.
 *
 * A full combination is found when the spotIndex being filled is the desired number of spots in the output
 * combinations.
 *
 * @param lastIndex
 * @param spotIndex
 * @private
 */
_buildUniques = function (lastIndex, spotIndex) {

    // todo - use the last index from curr combo to get last index, this way is busted.

    // starting at the last index iterated over, loop up to the length of the starting array.
    for (var index = (lastIndex + 1); index < startingArr.length; index++) {

        // push the current entry in the starting array to the current combo. Use the spotIndex to know which
        // spot in the combination array you are populating.
        currCombo[spotIndex] = startingArr[index];

        // if we are on the bottom level, push the combination to the output combinations array
        if (spotIndex === (desiredSpots - 1)) {

            combinations.push(currCombo.slice()); // use slice to get clone

        } else {

            // if we are not at the bottom of the tree (or the end of the loop) then we need to push another number
            // to the currCombo. Set the lastIndex to the current index before proceeding. 
            lastIndex = index;
            _buildUniques(lastIndex, (spotIndex + 1));
        }

    }
};



//var test = getUniques([1,2,3,4,5], 3);
//
//log.green(JSON.stringify(test));


module.exports = getUniques;