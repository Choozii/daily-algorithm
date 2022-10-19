/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const arr = [];
  let left = 0,
    right = nums.length - 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[left] ** 2 < nums[right] ** 2) {
      arr[i] = nums[right] ** 2;
      right--;
    } else {
      arr[i] = nums[left] ** 2;
      left++;
    }
  }
  return arr;
};
