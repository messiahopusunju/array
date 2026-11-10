// ****** Array-1 -- swapEnds ******
// Given an array of numbers, swap the first and last elements in the array. Return the modified array. The array length will be at least 1.

// Examples

// swapEnds([1, 2, 3, 4]) → [4,2,3,1]
// swapEnds([1, 2, 3]) → [3,2,1]
// swapEnds([8, 6, 7, 9, 5]) → [5,6,7,9,8]



function swapEnds(nums) {
  // Store the first and last elements in temporary variables
  let firstElement = nums[0];
  let lastElement = nums[nums.length - 1];

  // Swap the first and last elements
  nums[0] = lastElement;
  nums[nums.length - 1] = firstElement;

  // Return the modified array
  return nums;
}