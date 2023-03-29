"use strict"

// solution 1

function printAllPrimes(){
    var primes = []
    for(var i = 2 ; i <= 100 ; i++){
        console.log(`analysing ${i}`);
        for(var j = 2 ; j < i ; j++){
            if (i % j == 0){
                console.log(`${i} is not prime because of : ${i} % ${j} == 0`);
                break;
            }
        }
        if(j == i){
            console.log(`${i} is prime !`);
            primes.push(i);
        }
    }
    return primes;
}

var primes = printAllPrimes()
for(var prime of primes){
    console.log(prime)
}
