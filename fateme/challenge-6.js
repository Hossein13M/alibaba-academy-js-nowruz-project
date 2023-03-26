function pyramid(n = 5) {
  if (isTypeValid(n, "number")) {
    for (let index = 1; index <= n; index++) {
      const line = []
      for (let j = 1; j <= n - index; j++) {
        line.push(" ")
      }
      for (let k = 1; k <= 2 * index - 1; k++) {
        line.push("*")
      }
      console.log(line.join(""));
    }
  } else {
    console.log("bad request!")
  }
}

function isTypeValid(value, trueType) {
  return typeof value === trueType
}

pyramid();
pyramid("5");
pyramid(10);
