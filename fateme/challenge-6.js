function pyramid(n = 5) {
  for (let index = 1; index <= n; index++) {
    const line = [];
    for (let j = 1; j <= n - index; j++) {
      line.push(" ");
    }
    for (let k = 1; k <= 2 * index - 1; k++) {
      line.push("*");
    }
    console.log(line.join(""));
  }
}

pyramid();
pyramid(10);
