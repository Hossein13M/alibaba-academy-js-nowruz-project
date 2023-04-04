// Write down a function which gets an array of numbers from user and then calculate the followings: 
// 1) Maximum number in the array
// 2) Minimum number in the array


const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function getNumberArray() {
    return new Promise(resolve => {
        rl.question('Please enter a list of numbers separated by spaces: ', answer => {
            const numbers = answer.split(' ').map(Number);
            resolve(numbers);
        });
    });
}
function findMax(numbers) {
    let currentMax = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > currentMax) {
        currentMax = numbers[i];
      }
    }
    return currentMax;
  }
  
  function findMin(numbers) {
    let currentMin = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < currentMin) {
        currentMin = numbers[i];
      }
    }
    return currentMin;
  }
  
async function findMaxAndMin(){
    const numberOfArray = await getNumberArray();
    const maxNumber = findMax(numberOfArray)
    const minNumber = findMin(numberOfArray);
    console.log(`The maximum number of array is ${maxNumber}.`);
    console.log(`The minimum number of array is ${minNumber}.`);
    rl.close()
}

findMaxAndMin()