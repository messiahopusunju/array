// ****** Array-2 -- findLowestIndex ******
// Return the index of the minimum value in an array. The input array will have at least one element in it.

// Examples

// findLowestIndex([99, 98, 97, 96, 95]) → 4
// findLowestIndex([2, 2, 0]) → 2
// findLowestIndex([1, 3, 5]) → 0


function findLowestIndex(arr) {
  // Initialize the index of the minimum value to 0
  let minIndex = 0;
  // Iterate through the array starting from the second element
  for (let i = 1; i < arr.length; i++) {
    // If the current element is smaller than the element at minIndex, update minIndex
    if (arr[i] < arr[minIndex]) {
      minIndex = i;
    }
  }
  // Return the index of the minimum value
  return minIndex;
}