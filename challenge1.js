// Print all the prime numbers between 0 and 100.

function isPrime(n) {
    if (n <= 1) {
      return false;
    }
    const sqrtNumber = Math.floor(Math.sqrt(n));
    for (let i = 2; i <= sqrtNumber ; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
for (let i = 2; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}
  