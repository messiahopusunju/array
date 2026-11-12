// ****** Array-2 -- bigDiff ******
// Given an array length 1 or more of numbers, return the difference between the largest and smallest values in the array. Note: the built-in Math.min(v1, v2) and Math.max(v1, v2) methods return the smaller or larger of two values.

// Examples

// bigDiff([10, 3, 5, 6]) → 7
// bigDiff([7, 2, 10, 9]) → 8
// bigDiff([2, 10, 7, 2]) → 8


function bigDiff(nums) {
  // Initialize min and max to the first element of the array
  let min = nums[0];
  let max = nums[0];

  // Iterate through the array starting from the second element
  for (let i = 1; i < nums.length; i++) {
    // Update min if the current element is smaller
    if (nums[i] < min) {
      min = nums[i];
    }
    // Update max if the current element is larger
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  // Return the difference between max and min
  return max - min;
}