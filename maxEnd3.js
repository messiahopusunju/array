// ****** Array-1 -- maxEnd3 ******
// Given an array of numbers length 3, figure out which is larger, the first or last element in the array, and set all the other elements to be that value. Return the changed array.

// Examples

// maxEnd3([1, 2, 3]) → [3,3,3]
// maxEnd3([11, 5, 9]) → [11,11,11]
// maxEnd3([2, 11, 3]) → [3,3,3]



function maxEnd3(nums) {
  // Determine the larger of the first and last elements
  const max = Math.max(nums[0], nums[2]);
    // Set all elements to the larger value
  return [max, max, max];
}