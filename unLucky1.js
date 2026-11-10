// ****** Array-1 -- unlucky1 ******
// We'll say that a 1 immediately followed by a 3 in an array is an "unlucky" 1. Return true if the given array contains an unlucky 1 in the first 2 or last 2 positions in the array.

// Examples

// unlucky1([1, 3, 4, 5]) → true
// unlucky1([2, 1, 3, 4, 5]) → true
// unlucky1([1, 1, 1]) → false


function unlucky1(nums) {
  const len = nums.length;
  if (len < 2) return false;

  // Check first 2 positions:
  // 1. Indices 0 and 1
  if (nums[0] === 1 && nums[1] === 3) return true;
  
  // 2. Indices 1 and 2 (only if length >= 3)
  if (len >= 3 && nums[1] === 1 && nums[2] === 3) return true;

  // Check last 2 positions:
  // 3. Indices len-2 and len-1 (the very end)
  if (nums[len - 2] === 1 && nums[len - 1] === 3) return true;
  
  // 4. Indices len-3 and len-2 (one step inward from the end, only if length >= 4)
  if (len >= 4 && nums[len - 3] === 1 && nums[len - 2] === 3) return true;

  return false;
}