"use strict"

function getMaxMin(...args) {
    if (args.length){
        return ("error : empty array !")
    }
    let min = args[0];
    let max = args[0];
    console.log(`iterating the array : [${args}]`)
    for (let num of args){
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
