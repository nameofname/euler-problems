"use strict";

function bubbleSort (arr) {
    var curr;
    var last;
    var tmp;
    var swapOccurred = false;
    var done = false;

    while (!done) {

        swapOccurred = false;
        for (var i = 0; i < arr.length; i++) {

            curr = arr[i];
            last = arr[i-1];

            if ((last !== undefined) && (curr < last)) {
                tmp = curr;
                arr[i] = last;
                arr[i-1] = tmp;
                swapOccurred = true;
            }
            done = swapOccurred ? false : true;
        }
    }

    return arr;
}

module.exports = bubbleSort;