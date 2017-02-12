"use strict";

const bubbleSortOld = function (arr) {
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
};

// improved version
const bubbleSort = arr => {
    let swapOccurred = false;
    arr.forEach((val, idx) => {
        let tmp;
        if (val > arr[idx+1]) {
            tmp = arr[idx+1];
            arr[idx+1] = val;
            arr[idx] = tmp;
            swapOccurred = true;
        }
    });
    if (swapOccurred) return bubbleSort(arr);
    return arr;
};

module.exports = bubbleSort;