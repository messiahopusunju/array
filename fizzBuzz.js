// ****** Array-2 -- fizzBuzz ******
// This is slightly more difficult version of the famous FizzBuzz problem which is sometimes given as a first problem for job interviews. Consider the series of numbers beginning at start and running up to but not including end, so for example start=1 and end=5 gives the series 1, 2, 3, 4. Return a new array containing the string form of these numbers, except for multiples of 3, use "Fizz" instead of the number, for multiples of 5 use "Buzz", and for multiples of both 3 and 5 use "FizzBuzz". In JavaScript, you can use something.toString() to convert something to its string equivalent. You'll want push to add elements to the new array.

// Examples

// fizzBuzz(1, 6) → ["1","2","Fizz","4","Buzz"]
// fizzBuzz(1, 8) → ["1","2","Fizz","4","Buzz","Fizz","7"]
// fizzBuzz(1, 11) → ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz"]

function fizzBuzz(start, end) {
  let result = [];
  for (let i = start; i < end; i++) {
    if (i % 15 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }
  return result;
}