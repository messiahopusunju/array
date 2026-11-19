// ****** Array-2 -- post4 ******
// Given a non-empty array of numbers, return a new array containing the elements from the original array that come after the last 4 in the original array. The original array will contain at least one 4.

// Examples

// post4([2, 4, 1, 2]) → [1,2]
// post4([4, 1, 4, 2]) → [2]
// post4([4, 4, 1, 2, 3]) → [1,2,3]

function post4(nums) {
  let result = [];
  let lastIndex = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 4) {
      lastIndex = i;
    }
  }
  for (let i = lastIndex + 1; i < nums.length; i++) {
    result.push(nums[i]);
  }
  return result;
}