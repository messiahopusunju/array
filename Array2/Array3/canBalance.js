// ****** Array-3 -- canBalance ******
// Given a non-empty array, return true if there is a place to split the array so that the sum of the numbers on one side is equal to the sum of the numbers on the other side.

// Examples

// canBalance([1, 1, 1, 2, 1]) → true
// canBalance([2, 1, 1, 2, 1]) → false
// canBalance([10, 10]) → true

function canBalance(nums) {
  let totalSum = nums.reduce((acc, num) => acc + num, 0);
  let leftSum = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    leftSum += nums[i];
    if (leftSum === totalSum - leftSum) {
      return true;
    }
  }
  return false;
}