"use strict"

function minMax(...args) {
    const array = args;
    let min = array[0]
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max)
            max = array[i];
        if (array[i] < min)
            min = array[i];
    }
    return `Min = ${min} \nMax = ${max}`;
}

console.log(minMax(15, 7, 98, 283, -2, 431, 17, 28, 45, 69, 20));