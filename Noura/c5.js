//Write down a function that gets an array of number from the user and then sort the number from the lowest to the highest.

let numbers = [0, 1 , 2, 54, 10, 20, 3 ];
numbers.sort( function(a , b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});

console.log(numbers);