"use strict"


function mergeSort(nums) {
    if (nums.length === 0) {
        return []
    }
    if (nums.length === 1)
        return nums
    let firstPart = mergeSort(nums.slice(0, nums.length / 2));
    let secondPart = mergeSort(nums.slice(nums.length / 2));
    const res = []
    let firstHead = 0;
    let secHead = 0;
    while(1){
        if (firstPart[firstHead] < secondPart[secHead]){
            res.push(firstPart[firstHead]);
            firstHead++ ;
        }else{
            res.push(secondPart[secHead]);
            secHead++;
        }
        if (firstHead === firstPart.length){
            while(secHead !== secondPart.length){
                res.push(secondPart[secHead]);
                secHead++;
            }
            break;
        }
        if (secHead === secondPart.length){
            while(firstHead !== firstPart.length){
                res.push(firstPart[firstHead]);
                firstHead++;
            }
            break;
        }
    } 
    return res;
}

const a = [1,2,3,5,4,3,2,1]
console.log(mergeSort(a));
