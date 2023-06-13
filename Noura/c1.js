//Print all the prime numbers between 0 and 100.

function PrimeNumbers() {
    let num = 100
    for (let i = 2 ; i <= num ; i++) {
        flag = true;
        for (let j=2; j < i; j++) {
            if (i % j == 0) {
                flag = false
                break;
            }
        }
    }
}

