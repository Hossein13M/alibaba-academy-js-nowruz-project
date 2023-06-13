//Write down a function which gets an array of numbers from user and then calculate the followings:
//1.Maximum number in the array
//2.Minimum number in the array

//solution#1 
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var max = arr[0];

for (var i = 0; arr.length; i++) {
    if (arr[i] >= max) {
        max = arr[i];
        console.log("The max number is " + max)
    }
}
console.log(max);

//solution#2

// function getMax() {
//     let array = [9, 32, 87, 53, 11]
//     let max = array[0]
//     for (let i = 0, i < array.length; i++) {
//         if(array[i] > max) {
//             max = array[i]
//         }
//     }
 
// }