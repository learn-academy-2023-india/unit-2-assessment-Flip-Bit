// // ASSESSMENT 2: Coding Practical Questions with Jest

// // Please read all questions thoroughly
// // Pseudo coding is REQUIRED
// // If you get stuck, leave comments to help us understand your thought process

// // Use test driven development to complete the following questions
// // Add appropriate dependencies: $ yarn add jest

// // Reminder: The test will call your function
// // Run the file with the following command: $ yarn jest

// // --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// // a) Create a test with expect statements for each of the variables provided.


// const numbersArray1 = [6, 7, 8, 9, 10] 
// // Expected output: [18, 21, 24, 27, 30]

// const timesThree = (numbersArray1) => {
//     return numbersArray1.map((num) => num * 3)

// }

// const expectedOutput = [18, 21, 24, 27, 30]
// const result = timesThree(numbersArray1)
    
// // expect(result).toEqual(expectedOutput)

// const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]
// expect(result).toEqual(expectedOutput)

// // b) Create the function that makes the test pass.


// // Pseudo code:
// // Input - Given array * 3
// // Output - The expected Output
// // Modify the given array by multiplying each value by 3

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

// Pseudo code:

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

// Pseudo code:

//Answers
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// code-challenges.test.js

// --------------------1) Create a function that takes an object as an argument and decides if the number inside it is evenly divisible by three.
// Define a function isDivisibleByThree that takes an object as an argument
const isDivisibleByThree = (obj) => {
  // Destructure the 'number' property from the input object
  const { number } = obj;
  // Check if the number is divisible by three and return the result
  return number % 3 === 0 ? `${number} is divisible by three` : `${number} is not divisible by three`;
};

// Test cases for the isDivisibleByThree function
describe("1) isDivisibleByThree", () => {
  // Test case 1
  const object1 = { number: 15 };
  it("returns '15 is divisible by three' for object1", () => {
      // Call the isDivisibleByThree function with object1 and store the result
      const result = isDivisibleByThree(object1);
      // Assert that the result is equal to the expected string
      expect(result).toEqual("15 is divisible by three");
  });

  // Test case 2
  const object2 = { number: 0 };
  it("returns '0 is divisible by three' for object2", () => {
      // Call the isDivisibleByThree function with object2 and store the result
      const result = isDivisibleByThree(object2);
      // Assert that the result is equal to the expected string
      expect(result).toEqual("0 is divisible by three");
  });

  // Test case 3
  const object3 = { number: -7 };
  it("returns '-7 is not divisible by three' for object3", () => {
      // Call the isDivisibleByThree function with object3 and store the result
      const result = isDivisibleByThree(object3);
      // Assert that the result is equal to the expected string
      expect(result).toEqual("-7 is not divisible by three");
  });
});



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.
// Define a function capitalizeWords that takes an array of words as an argument
const capitalizeWords = (wordsArray) => {
  // Use the map function to capitalize the first letter of each word
  return wordsArray.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
};

// Test cases for the capitalizeWords function
describe("2) capitalizeWords", () => {
  // Test case 1
  const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"];
  it("returns an array with all the words capitalized for randomNouns1", () => {
      // Call the capitalizeWords function with randomNouns1 and store the result
      const result = capitalizeWords(randomNouns1);
      // Assert that the result is equal to the expected capitalized array
      expect(result).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]);
  });

  // Test case 2
  const randomNouns2 = ["temperature", "database", "chopsticks", "mango"];
  it("returns an array with all the words capitalized for randomNouns2", () => {
      // Call the capitalizeWords function with randomNouns2 and store the result
      const result = capitalizeWords(randomNouns2);
      // Assert that the result is equal to the expected capitalized array
      expect(result).toEqual(["Temperature", "Database", "Chopsticks", "Mango"]);
  });
});
