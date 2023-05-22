/*
Given a sequence of numbers, find the largest pair sum in the sequence.
Input sequence contains minimum two elements and every element is an integer.

For example
[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
*/


// Solution

function largestPairSum(numbers) {
  numbers.sort(function(a, b){ return b - a });
  return numbers[0] + numbers[1];
}

// or

function largestPairSum(numbers) {
  let [a, b] = numbers.sort((a, b) => b - a)
  return a + b
}