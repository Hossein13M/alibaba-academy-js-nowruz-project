function pyramid(num) {
  for(let i = 0; i < num; i++) {
    let row = ""
    for( let j = 0; j < 2 * i + 1; j++) {
      row += "*"
    }
    console.log(row);
  }
}
pyramid(1)