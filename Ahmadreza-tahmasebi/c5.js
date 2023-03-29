"use strict"


function mergeSort(nums) {
    if (nums.length == 0) {
        return []
    }
    if (nums.length == 1)
        return nums
    var firstPart = mergeSort(nums.slice(0, nums.length / 2));
    var secondPart = mergeSort(nums.slice(nums.length / 2));
    var res = []
    var firstHead = 0;
    var secHead = 0;
    while(1){
        if (firstPart[firstHead] < secondPart[secHead]){
            res.push(firstPart[firstHead]);
            firstHead++ ;
        }else{
            res.push(secondPart[secHead]);
            secHead++;
        }
        if (firstHead == firstPart.length){
            while(secHead != secondPart.length){
                res.push(secondPart[secHead]);
                secHead++;
            }
            break;
        }
        if (secHead == secondPart.length){
            while(firstHead != firstPart.length){
                res.push(firstPart[firstHead]);
                firstHead++;
            }
            break;
        }
    } 
    return res;
}

var a = [1,2,3,5,4,3,2,1]
console.log(mergeSort(a));