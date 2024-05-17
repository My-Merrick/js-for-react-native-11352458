function processArray(arr) {
  // Create a new empty array to store the modified elements
  const newArr = [];

  // Loop through each element in the original array
  for (let num of arr) {
    // Check if the number is even using the modulo operator (%)
    if (num % 2 === 0) {
      // Square the even number
      newArr.push(num * num);
    } else {
      // Triple the odd number
      newArr.push(num * 3);
    }
  }

  // Return the new array with modified elements
  return newArr;
}

// Example
const originalArray = [1, 4, 3, -2, 5, 6];
const modifiedArray = processArray(originalArray);
console.log("Original array:", originalArray);
console.log("Modified array:", modifiedArray);
