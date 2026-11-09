// ****** Array-1 -- makeMiddle ******
// Given an array of numbers of even length, return a new array length 2 containing the middle two elements from the original array. The original array will be length 2 or more.

// Examples

// makeMiddle([1, 2, 3, 4]) → [2,3]
// makeMiddle([7, 1, 2, 3, 4, 9]) → [2,3]
// makeMiddle([1, 2]) → [1,2]

function makeMiddle(nums) {
  // Calculate the middle index of the array
  const midIndex = nums.length / 2;
  // Return a new array containing the middle two elements
  return [nums[midIndex - 1], nums[midIndex]];
}