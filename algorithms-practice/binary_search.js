function binarySearch(array, key) {
    let first = 0;
    //first is the first index in the array;
    let last = array.length - 1;
    //last is the last index in the array;

    while (first <= last) {
        const mid = first + Math.floor((last - first) / 2);
        if (array[mid] === key) {
            return mid;
        }
        if (array[mid] < key) {
            first = mid + 1;
        } else {
            last = mid - 1;
        }
    }
    return "None";
}


function verify(index) {
    if (index !== "None") {
        console.log("Target found at index: " + index)
    } else {
      console.log("Target not found in list");
    }
  }

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  let result = binarySearch(numbers, 12)

verify(result)

 result = binarySearch(numbers, 6)

verify(result)