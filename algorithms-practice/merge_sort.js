// Sorts a list in ascending order
// Returns a new storted list
// Divide: Find the midpoint of the list and divide in sublitsts
// Conquer: Recursively sort the sublist created in previous step
// Combine: Merge the sorted sublist created in previous step
//Take O(n log n) time

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  // Take overall O(log n) time
  // Split the array into two halves
  const middle = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, middle);
  const rightHalf = arr.slice(middle);

  // Recursively sort each half
  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

// Merge two lists (arrays), sorting them in the process
// Returns a new merged list
// Run in overall O(n) time
function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements and merge them in sorted order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }

  // Concatenate the remaining elements (if any)
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function verifySorted (list) {
    let verifyList = list.length;

    if (verifyList === 0 || verifyList === 1) {
        return true;
    }
    return list[0] < list[1] && verifySorted(list.slice(1))
}

// Example usage:
const unsortedArray = [4, 2, 7, 1, 9, 3];
const sortedArray = mergeSort(unsortedArray);

console.log("Unsorted Array:", unsortedArray);
console.log("Sorted Array:", sortedArray);

console.log(verifySorted(unsortedArray));
console.log(verifySorted(sortedArray));