// Task2.js

// Import the processArray and formatArrayStrings functions from arrayManipulation.js
const { processArray, formatArrayStrings } = require("./arrayManipulation");

// Example usage:
const inputArray = [1, 2, 3, 4, 5];
const processedArray = processArray(inputArray);
console.log("Processed Array:", processedArray); // Output: [3, 4, 9, 16, 15]

const inputStrings = ["hello", "world", "javascript", "node", "openai"];
const formattedStrings = formatArrayStrings(inputStrings, processedArray);
console.log("Formatted Strings:", formattedStrings);
// Output: ["hello", "WORLD", "javascript", "NODE", "openai"]
