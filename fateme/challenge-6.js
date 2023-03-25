function pyramid(n = 5) {
  for (let index = 1; index <= n; index++) {
    for (let j = 1; j <= n - index; j++) {
      process.stdout.write(" ");
    }
    for (let k = 1; k <= 2 * index - 1; k++) {
      process.stdout.write("*");
    }
    console.log();
  }
}

pyramid();
pyramid(10);
