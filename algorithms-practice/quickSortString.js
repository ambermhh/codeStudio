function quickSortStrings(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].localeCompare(pivot) < 0) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSortStrings(left), pivot, ...quickSortStrings(right)];
}

// Example usage:
const stringArray = ["banana", "apple", "grape", "orange", "kiwi", "strawberry"];
const sortedStringArray = quickSortStrings(stringArray);
console.log(sortedStringArray);
 
const names = ["Francina Vigneault", "Lucie Hansman", "Nancie Rubalcaba", "Elida Sleight"];
const sortedNames = quickSortStrings(names);
console.log(sortedNames);

   
module.exports = {sortedNames};
    
