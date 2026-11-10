// ****** Array-1 -- frontPiece ******
// Given a number array of any length, return a new array of its first 2 elements. If the array is smaller than length 2, use whatever elements are present.

// Examples

// frontPiece([1, 2, 3]) → [1,2]
// frontPiece([1, 2]) → [1,2]
// frontPiece([1]) → [1]

function frontPiece(nums) {
  // Check if the array has at least 2 elements
  if (nums.length >= 2) {
    // Return a new array containing the first two elements
    return [nums[0], nums[1]];
  } else {
    // If the array has less than 2 elements, return the original array
    return nums;
  }
}