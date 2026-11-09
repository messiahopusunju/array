// ****** Array-1 -- double23 ******
// Given a number array, return true if the array contains 2 twice, or 3 twice. The array will be length 0, 1, or 2.

// Examples

// double23([2, 2]) → true
// double23([3, 3]) → true
// double23([2, 3]) → false

function double23(nums) {
  // Check if the array contains two 2's or two 3's
  return (nums.length === 2 && (nums[0] === 2 && nums[1] === 2)) || 
         (nums.length === 2 && (nums[0] === 3 && nums[1] === 3));
}