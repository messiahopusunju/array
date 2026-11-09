// ****** Array-1 -- firstLast6 ******
// Given an array of numbers, return true if 6 appears as either the first or last element in the array. The array will be length 1 or more.

// Examples

// firstLast6([1, 2, 6]) → true
// firstLast6([6, 1, 2, 3]) → true
// firstLast6([13, 6, 1, 2, 3]) → false



function firstLast6(nums) {
  // Check if the first element is 6 or the last element is 6
  return nums[0] === 6 || nums[nums.length - 1] === 6;
}