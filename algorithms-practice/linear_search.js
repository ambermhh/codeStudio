function linearSearch(array, key){
    for(let i = 0; i < array.length; i++){
      if(array[i] === key) {
          return i;
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

  let result = linearSearch(numbers, 12)

verify(result)

 result = linearSearch(numbers, 6)

verify(result)