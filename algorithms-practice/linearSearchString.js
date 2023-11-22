function indexOfItem(collection, target) {
    for (let i = 0; i < collection.length; i++) {
        if (collection[i] === target) {
            return i;
        }
    }
    return null;
}

const names = ["Francina Vigneault", "Lucie Hansman", "Nancie Rubalcaba", "Elida Sleight"];

let index = indexOfItem(names, "Lucie Hansman");
console.log(index); // prints: 1
