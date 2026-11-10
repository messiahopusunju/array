// ****** Array-1 -- maxTriple ******
// Given an array of numbers of odd length, look at the first, last, and middle values in the array and return the largest. The array length will be a least 1.

// Examples

// maxTriple([1, 2, 3]) → 3
// maxTriple([1, 5, 3]) → 5
// maxTriple([5, 2, 3]) → 5


function maxTriple(nums) {
  // Calculate the middle index of the array
  let midIndex = Math.floor(nums.length / 2);
  // Get the first, middle, and last elements
  let firstElement = nums[0];
  let middleElement = nums[midIndex];
  let lastElement = nums[nums.length - 1];
  // Return the largest of the three elements
  return Math.max(firstElement, middleElement, lastElement);
}