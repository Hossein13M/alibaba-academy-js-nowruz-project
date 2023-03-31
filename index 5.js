"use strict"

function bubbleSort(...args) {
    const array = args;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j + 1] < array[j]) {
                [array[j + 1], array[j]] = [array[j], array[j + 1]];
            }
        }
    }
    return array;
}

console.log(bubbleSort(93, 26, 78, 42, 109, 21, 133, 7, 118));