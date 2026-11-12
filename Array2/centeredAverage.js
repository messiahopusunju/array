// ****** Array-2 -- centeredAverage ******
// Return the "centered" average of an array of numbers, which we'll say is the mean average of the values, except ignoring the largest and smallest values in the array. If there are multiple copies of the smallest value, ignore just one copy, and likewise for the largest value. Use Math.floor() when computing the average to produce a whole-number result. You may assume that the array is length 3 or more.

// Examples

// centeredAverage([1, 2, 3, 4, 100]) → 3
// centeredAverage([1, 1, 5, 5, 10, 8, 7]) → 5.2
// centeredAverage([-10, -4, -2, -4, -2, 0]) → -3


function centeredAverage(nums) {
  // Sort the array to easily find the smallest and largest values
  nums.sort((a, b) => a - b);
  // Remove the smallest and largest values
  nums.shift();
  nums.pop();
  // Calculate the average of the remaining values
  let sum = nums.reduce((acc, val) => acc + val, 0);
  let average = sum / nums.length;
  // Return the floor of the average
  return Math.floor(average);
}