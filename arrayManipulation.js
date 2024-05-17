function processArray(arr) {
  // Assuming you want to perform some operations on the array elements
  // Example: Multiplying each element by 2 (this can be customized as needed)
  return arr.map((num) => num * 2);
}

function formatArrayStrings(strArr, numArr) {
  // Check if both arrays are of the same length
  if (strArr.length !== numArr.length) {
    throw new Error("Input arrays must have the same length");
  }

  // Create a new empty array to store the formatted strings
  const formattedStrings = [];

  // Loop through each string and corresponding number
  for (let i = 0; i < strArr.length; i++) {
    const string = strArr[i];
    const number = numArr[i];

    // Modify string based on even/odd number
    if (number % 2 === 0) {
      formattedStrings.push(string.toUpperCase());
    } else {
      formattedStrings.push(string.toLowerCase());
    }
  }

  // Return the new array with formatted strings
  return formattedStrings;
}

// EXAMPLE WITH INPUTS
const originalStrings = [
  "Dennis",
  "Merrick",
  "Kim",
  "Jason",
  "Sarah",
  "Bob",
  "Steve",
  "Mike",
];
const modifiedArray = processArray([1, 4, 3, -2, 5]);
const formattedText = formatArrayStrings(originalStrings, modifiedArray);

console.log("Original strings:", originalStrings);
console.log("Modified array:", modifiedArray);
console.log("Formatted text:", formattedText);
