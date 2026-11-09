// ****** Array-1 -- makeLast ******
// Given a number array, return a new array with double the length where its last element is the same as the original array, and all the other elements are 0. The original array will be length 1 or more.

// Examples

// makeLast([4, 5, 6]) → [0,0,0,0,0,6]
// makeLast([1, 2]) → [0,0,0,2]
// makeLast([3]) → [0,3]

function makeLast(nums) {
  // Create a new array with double the length of the input array, initialized with 0s
  const newArray = new Array(nums.length * 2).fill(0);
  // Set the last element of the new array to the last element of the input array
  newArray[newArray.length - 1] = nums[nums.length - 1];
  return newArray;
}