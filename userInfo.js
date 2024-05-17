function processArray(arr) {
  return arr.map((num) => num * 2);
}

function formatArrayStrings(strArr, numArr) {
  if (strArr.length !== numArr.length) {
    throw new Error("Input arrays must have the same length");
  }

  const formattedStrings = [];
  for (let i = 0; i < strArr.length; i++) {
    const string = strArr[i];
    const number = numArr[i];

    if (number % 2 === 0) {
      formattedStrings.push(string.toUpperCase());
    } else {
      formattedStrings.push(string.toLowerCase());
    }
  }

  return formattedStrings;
}

// function to create user profiles
function createUserProfiles(originalNames) {
  // Calculate modified array
  const modifiedArray = processArray([1, 4, 3, 2, 5, 6, 7, 8]);

  // Format the strings based on the modified array
  const modifiedNamesArray = formatArrayStrings(originalNames, modifiedArray);

  // Create user profiles
  const userProfiles = originalNames.map((name, index) => ({
    originalName: name,
    modifiedName: modifiedNamesArray[index],
    id: index + 1, // auto-incremented ID starting from 1
  }));

  return userProfiles;
}

// EXAMPLE USAGE
const originalNames = [
  "Dennis",
  "Merrick",
  "Kim",
  "Jason",
  "Sarah",
  "Bob",
  "Steve",
  "Mike",
];

try {
  const profiles = createUserProfiles(originalNames);
  console.log("User Profiles:");
  console.log(profiles);
} catch (error) {
  console.error("Error:", error.message);
}
