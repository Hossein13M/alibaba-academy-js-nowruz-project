let sorted = [];
function sortNum(arg) {
  arg.forEach((secondeNum) => {
    let y = sorted.findIndex((currentNum) => secondeNum < currentNum);
    if (y === -1) {
      sorted.push(secondeNum);
    } else {
      sorted.splice(y, 0, secondeNum);
    }
  });
  console.log(sorted);
}
sortNum([2, 3, 5, 8, 1]);
