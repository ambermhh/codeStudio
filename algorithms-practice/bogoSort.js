// Bogo Sort is a highly inefficient and impractical sorting algorithm.

// Here's how Bogo Sort works:

// Shuffle:
// The algorithm starts by randomly shuffling the elements in the list.
// Check:
// It then checks if the list is sorted.
// Repeat:
// If the list is sorted, the algorithm is done.
// If the list is not sorted, it goes back to step 1 and repeats the process.

// Randomly shuffle the elements of the array that's passed in.
// Bogo Sort is that the average-case time complexity is extremely high 
//and can be expressed as O((n+1)!)
function shuffle(array) {
    var swapIndex = array.length;
    var temp, randomIndex;

    while (swapIndex !== 0) {

        randomIndex = Math.floor(Math.random() * swapIndex);

        swapIndex -= 1;

        temp = array[swapIndex];
        array[swapIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }

    return array;
}

// Returns true if array is sorted, false if not.
function isSorted(array){
    for(let i = 1; i < array.length; i++) {
        if (array[i-1] > array[i]) {
            return false;
        }
    }
    return true;
}

// Shuffles array until it's sorted.
function bogoSort(array){
    let attempts = 0;
    while(isSorted(array) == false) {
        console.log(attempts);
        array = shuffle(array);
        attempts++;
    }
    return array;
}

const testValues = [29, 100, 1, 2, 57];

let sorted = bogoSort(testValues);
console.log(sorted);


function sum (numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    let remainingSum = sum(numbers.slice(1))
    return numbers[0] + remainingSum;
    
}
console.log(sum([1, 2, 3, 4]))