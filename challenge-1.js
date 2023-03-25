// BruteForce O(n^2)

function primeNumbersBruteForce(n) {
  if (typeof n !== "number") return "bad request!";
  const primeNumbers = [];
  n >= 2 && primeNumbers.push(2);
  for (let index = 3; index <= n; index += 2) {
    isPrime(index) && primeNumbers.push(index);
  }
  return primeNumbers;
}

function isPrime(n) {
  for (let index = 2; index <= Math.sqrt(n); index++) {
    if (n % index === 0) return false;
  }
  return true;
}

// test case for prime numbers

console.log(primeNumbersBruteForce("2"));
console.log(
  "[BruteForce]the prime numbers between 0 and 2:",
  primeNumbersBruteForce(2)
);
console.time("BruteForce");
console.log(
  "[BruteForce]the prime numbers between 0 and 100:",
  primeNumbersBruteForce(100)
);
console.timeEnd("BruteForce");

// another solution for generating prime numbers with marking numbers O(n*log(n))
function primeNumbers(n) {
  if (typeof n !== "number") return "bad request!";
  const primeNumbers = [];
  const numbers = Array(n + 1);
  numbers.fill(true);
  for (let index = 2; index <= Math.sqrt(n); index++) {
    if (numbers[index]) {
      for (let j = index * 2; j <= n; j += index) {
        numbers[j] = false;
      }
    }
  }
  for (let index = 2; index < numbers.length; index++) {
    numbers[index] && primeNumbers.push(index);
  }
  return primeNumbers;
}

// test case for prime numbers

console.log("the prime numbers between 0 and 2:", primeNumbers(2));
console.time("other way");
console.log("the prime numbers between 0 and 100:", primeNumbers(100));
console.timeEnd("other way");
