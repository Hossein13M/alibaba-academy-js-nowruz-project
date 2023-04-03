function findMinMax(nums) {
  let max = nums[0];
  let min = nums[0];

  nums.forEach(item => {
    if (item> max) {
      max = item;
      return max
    }
    if (item < min) {
      min = item;
      return min
    }
  });
  console.log(max, min); 
}
findMinMax([1,2,3,4,5,6])