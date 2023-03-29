"use strict"

function getMaxMin(...args) {
    if (args.length === 0){
        return ("error : empty array !")
    }
    var min = Infinity;
    var max = -Infinity;
    console.log(`iterating the array : [${args}]`)
    for (var num of args){
        if(num > max) {
            console.log(`max updated from ${max} to ${num}`);
            max = num ;
        }
        if (num < min){
            console.log(`min updated from ${min} to ${num}`);
            min = num ;
        }
    }
    return ({
        "min" : min,
        "max" : max,
    })
}
const res = getMaxMin(-1,-2,12,33,-5,34,104,-204,204,204);
console.log(res)
