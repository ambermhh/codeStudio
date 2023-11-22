//"RangeError: Maximum call stack size exceeded,"
//indicates that your recursive function is entering into
// an infinite loop or an extremely deep recursion, leading to a stack overflow.
//Need a base case that would break the recursion when the array is empty.
function sum(numbers) {
  // Base case: if the array is empty, return 0
  if (numbers.length === 0) {
    return 0;
  }

  // Recursive case: sum the first element with the sum of the rest of the elements
  let remainingSum = sum(numbers.slice(1));

  // Return the sum of the first element and the remaining sum
  return numbers[0] + remainingSum;
}

// Example usage: calculating the sum of [1, 2, 3, 4]
console.log(sum([1, 2, 3, 4]));
