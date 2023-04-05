"use strict"

function findPrimeNumbers(input) {
    const primeNumbers = [];
    for (let i = 2; i <= input; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeNumbers.push(i);
        }
    }
    return primeNumbers;
}
console.log(findPrimeNumbers(100));