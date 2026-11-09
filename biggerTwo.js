// ****** Array-1 -- biggerTwo ******
// Start with 2 number arrays, a and b, each length 2. Consider the sum of the values in each array. Return the array which has the largest sum. In event of a tie, return a.

// Examples

// biggerTwo([1, 2], [3, 4]) → [3,4]
// biggerTwo([3, 4], [1, 2]) → [3,4]
// biggerTwo([1, 1], [1, 2]) → [1,2]

function biggerTwo(a, b) {
  // Calculate the sum of each array
  const sumA = a[0] + a[1];
  const sumB = b[0] + b[1];
  // Return the array with the larger sum, or a in case of a tie
  return sumA >= sumB ? a : b;
}