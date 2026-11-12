// ****** Array-2 -- countEvens ******
// Return the number of even numbers in the given array. Note: the % "mod" operator computes the remainder, e.g. 5 % 2 is 1.

// Examples

// countEvens([2, 1, 2, 3, 4]) → 3
// countEvens([2, 2, 0]) → 3
// countEvens([1, 3, 5]) → 0


function countEvens(nums) {
  // Initialize a counter for even numbers
  let count = 0;
  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // Check if the current number is even
    if (nums[i] % 2 === 0) {
      count++;
    }
  }
  // Return the count of even numbers
  return count;
}