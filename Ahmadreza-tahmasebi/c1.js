"use strict"

// solution 1

function printAllPrimes(){
    const primes = []
    let j = 0;
    for(let i = 2 ; i <= 100 ; i++){
        console.log(`analysing ${i}`);
        for(j = 2 ; j < i ; j++){
            if (i % j == 0){
                console.log(`${i} is not prime because of : ${i} % ${j} == 0`);
                break;
            }
        }
        if(j === i){
            console.log(`${i} is prime !`);
            primes.push(i);
        }
    }
    return primes;
}

const primes = printAllPrimes()
for(let prime of primes){
    console.log(prime)
}
