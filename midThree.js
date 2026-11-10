// ****** Array-1 -- midThree ******
// Given an array of numbers of odd length, return a new array length 3 containing the elements from the middle of the array. The array length will be at least 3.

// Examples

// midThree([1, 2, 3, 4, 5]) → [2,3,4]
// midThree([8, 6, 7, 5, 3, 0, 9]) → [7,5,3]
// midThree([1, 2, 3]) → [1,2,3]


function midThree(nums) {
  // Calculate the middle index of the array
  let midIndex = Math.floor(nums.length / 2);
  // Return a new array containing the middle three elements
  return [nums[midIndex - 1], nums[midIndex], nums[midIndex + 1]];
}