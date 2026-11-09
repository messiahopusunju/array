// ****** Array-1 -- no23 ******
// Given a number array length 2, return true if it does not contain a 2 or 3.

// Examples

// no23([4, 5]) → true
// no23([4, 2]) → false
// no23([3, 5]) → false


function no23(nums) {
    // Check if the array does not contain a 2 or a 3
    return !nums.includes(2) && !nums.includes(3);
}




