
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
    let spaces = " ".repeat(num - i);
    let stars = "*".repeat(2 * i - 1);
    pyramid += spaces + stars + "\n";
  }
  console.log(pyramid);
  rl.close();
}

printPyramid();
