// const readline = require('readline')
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

async function sortNumber() {
    const numbers = await getNumberArray();
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] > numbers[i + 1]) {
          const temp = numbers[i];
          numbers[i] = numbers[i + 1];
          numbers[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
  
    console.log(`Sorted array: ${numbers}`);
    rl.close();
  }

sortNumber();