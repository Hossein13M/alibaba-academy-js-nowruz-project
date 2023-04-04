
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getNumber() {
  return new Promise(resolve => {
    rl.question("Please enter a number: ", answer => {
      const num = parseInt(answer);
      resolve(num);
    });
  });
}

async function printPyramid() {
  const num = await getNumber();
  let pyramid = "";
  for (let i = 1; i <= num; i++) {
    let spaces = "";
    for (let j = 1; j <= num - i; j++) {
      spaces += " ";
    }
    let stars = "";
    for (let k = 1; k <= 2 * i - 1; k++) {
      stars += "*";
    }
    pyramid += spaces + stars + "\n";
  }
  console.log(pyramid);
  rl.close();
}

printPyramid();
