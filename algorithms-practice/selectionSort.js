// Selection Sort is a simple comparison-based sorting algorithm that works by dividing the input list into two parts:
// a sorted portion and an unsorted portion.
// The algorithm repeatedly selects the smallest (or largest, depending on the sorting order) element from the unsorted portion and swaps it with the first unsorted element, thus expanding the sorted portion.
// Here are the basic steps of the Selection Sort algorithm:
// Initialization:
// Start with the entire list considered as unsorted.
// Find the Minimum:
// Find the minimum element in the unsorted portion of the list.
// Swap:
// Swap the found minimum element with the first element of the unsorted portion.
// Expand Sorted Portion:
// Expand the sorted portion by moving the boundary between the sorted and unsorted portions one element to the right.
// Repeat:
// Repeat steps 2-4 until the entire list is sorted.
// Algorithm Completes:
// The algorithm is complete when the entire list becomes sorted.

// Time Complexity:
// The time complexity of Selection Sort is O(n^2), 
// where "n" is the number of elements in the list. 
// This makes it inefficient for large lists, 
// and it's generally not used for large-scale data sets. 
// However, it has the advantage of performing only a constant number of swaps, 
// which can be beneficial in certain scenarios where the cost of swapping elements is high.
function indexOfMin(list) {
  let minIndex = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] < list[minIndex]) {
      minIndex = i;
    }
  }
  return minIndex;
}

function selectionSort(list) {
  let sortedList = [];
//   console.log(`${list.join(" ").padEnd(25)} ${sortedList.join(" ").padEnd(25)}`);
  while (list.length > 0) {
    let indexToMove = indexOfMin(list);
    sortedList.push(list.splice(indexToMove, 1)[0]);
    // console.log(`${list.join(" ").padEnd(25)} ${sortedList.join(" ").padEnd(25)}`);
  }
  return sortedList;
}

const testValues = [29, 100, 1, 2, 57, 28, 88, 3, 50, 67, 37, 1, 32, 20];

let sorted = selectionSort(testValues);
console.log(sorted);
