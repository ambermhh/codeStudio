function recursiveBinarySearch(array, key) {

  if (array.length === 0) {
    return false;
  } else {
    let mid = Math.floor(array.length / 2);
    if (array[mid] === key) {
      return true;
    } else {
        if(array[mid] < key) {
            return recursiveBinarySearch(array.slice(mid + 1), key);
        } else {
            return recursiveBinarySearch(array.slice(0, mid), key);
        }
    }
  }
}

function verify(result) {
    console.log("Target found: " + result);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
result = recursiveBinarySearch(numbers, 12)

verify(result)

result = recursiveBinarySearch(numbers, 3)

verify(result)