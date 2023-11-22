// QuickSort is a highly efficient and widely used sorting algorithm that
// uses a divide-and-conquer strategy to sort an array or list.
//It was developed by Tony Hoare in 1960 and is known for
// its average-case time complexity of O(n log n).
//QuickSort is a comparison-based sorting algorithm and
// follows the principle of partitioning.

// Here is a high-level overview of the QuickSort algorithm:
// Partitioning:
// Choose a "pivot" element from the array. The choice of the pivot can vary,
//but a common strategy is to select the last element in the array.
// Rearrange the elements in the array so that all elements smaller than
// the pivot are on its left, and all elements greater than the pivot are on its right.
// Recursion:
// Apply QuickSort recursively to the subarrays on the left and right of the pivot.
// Base Case:
// The base case occurs when the subarray has fewer than two elements, as a single-element or empty array is already sorted.
// The key operation in QuickSort is the partitioning step, where the elements are rearranged around the pivot. This process continues recursively until the entire array is sorted.

function quicksort(values) {
  // Base Case
  if (values.length <= 1) {
    return values;
  }
  let lessThanPivot = [];
  let greaterThanPivot = [];
  let pivot = values[0];
  for (let i = 1; i < values.length; i++) {
    if (values[i] <= pivot) {
      lessThanPivot.push(values[i]);
    } else {
      greaterThanPivot.push(values[i]);
    }
  }

  // To check how it works
  //   const formattedString = `${lessThanPivot
  //     .join(", ")
  //     .padEnd(15)} ${pivot} ${greaterThanPivot.join(", ").padStart(15)}`;
  //   console.log(formattedString);
  return quicksort(lessThanPivot).concat(pivot, quicksort(greaterThanPivot));
}

const testValues = [32, 100, 1, 2, 29, 28, 88, 3, 50, 67, 37, 1, 57, 20];

let sorted = quicksort(testValues);
console.log(sorted);

// Another way for quick sort
// function quickSort(arr) {
//     if (arr.length <= 1) {
//         return arr; // Base case: already sorted
//     }

//     const pivot = arr[arr.length - 1];
//     const left = [];
//     const right = [];

//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }

//     return [...quickSort(left), pivot, ...quickSort(right)];
// }

// // Example usage:
// const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
// const sortedArray = quickSort(unsortedArray);
// console.log(sortedArray);
