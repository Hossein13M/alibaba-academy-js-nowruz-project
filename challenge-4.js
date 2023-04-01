function findMinMax(array) {
  let max = array[0]
  let min = array[0]
  for(let i = 1; i < array.length; i++) {
    if(array[i] > max) {
      max = array[i]
    } else if(array[i] < min) {
      min = array[i]
    }
  }
  return [max, min]
}
const result = findMinMax([12, 23, 34, 12])
console.log(result);