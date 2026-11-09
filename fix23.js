// ****** Array-1 -- fix23 ******
// Given a number array length 3, if there is a 2 in the array immediately followed by a 3, set the 3 element to 0. Return the changed array.

// Examples

// fix23([1, 2, 3]) → [1,2,0]
// fix23([2, 3, 5]) → [2,0,5]
// fix23([1, 2, 1]) → [1,2,1]


function fix23(nums) {
  // Check if the second element is 2 and the third element is 3
  if (nums[1] === 2 && nums[2] === 3) {
    nums[2] = 0; // Set the third element to 0
  }
  // Check if the first element is 2 and the second element is 3
  if (nums[0] === 2 && nums[1] === 3) {
    nums[1] = 0; // Set the second element to 0
  }
  return nums; // Return the changed array
}