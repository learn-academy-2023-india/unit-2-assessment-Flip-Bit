// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.


const numbersArray1 = [6, 7, 8, 9, 10] 
// Expected output: [18, 21, 24, 27, 30]

const timesThree = (numbersArray1) => {
    return numbersArray1.map((num) => num * 3)

}

const expectedOutput = [18, 21, 24, 27, 30]
const result = timesThree(numbersArray1)
    
// expect(result).toEqual(expectedOutput)

const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]
expect(result).toEqual(expectedOutput)

// b) Create the function that makes the test pass.


// Pseudo code:
// Input - Given array * 3
// Output - The expected Output
// Modify the given array by multiplying each value by 3

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

// --------------------INSTRUCTOR EXAMPLE
const timesThree = (numbersArray) => {
    return numbersArray.map((num) => num * 3);
  };
  
  describe("INSTRUCTOR EXAMPLE", () => {
    const numbersArray1 = [6, 7, 8, 9, 10];
    const numbersArray2 = [24, 27, 30, 33, 36];
    const expectedOutput = [18, 21, 24, 27, 30];
  
    it("returns an array with all the numbers multiplied by 3", () => {
      const result1 = timesThree(numbersArray1);
      expect(result1).toEqual(expectedOutput);
  
      const result2 = timesThree(numbersArray2);
      expect(result2).toEqual([72, 81, 90, 99, 108]);
    });
  });
  
  // --------------------1) Create a function that takes an object as an argument and decides if the number inside it is evenly divisible by three or not.
  const isDivisibleByThree = (obj) => {
    const { number } = obj;
    return number % 3 === 0 ? `${number} is divisible by three` : `${number} is not divisible by three`;
  };
  
  describe("1) isDivisibleByThree", () => {
    const object1 = { number: 15 };
    const object2 = { number: 0 };
    const object3 = { number: -7 };
  
    it("returns '15 is divisible by three' for object1", () => {
      const result = isDivisibleByThree(object1);
      expect(result).toEqual("15 is divisible by three");
    });
  
    it("returns '0 is divisible by three' for object2", () => {
      const result = isDivisibleByThree(object2);
      expect(result).toEqual("0 is divisible by three");
    });
  
    it("returns '-7 is not divisible by three' for object3", () => {
      const result = isDivisibleByThree(object3);
      expect(result).toEqual("-7 is not divisible by three");
    });
  });
  
  // --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.
  const capitalizeWords = (wordsArray) => {
    return wordsArray.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  };
  
  describe("2) capitalizeWords", () => {
    const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"];
    const randomNouns2 = ["temperature", "database", "chopsticks", "mango"];
  
    it("returns an array with all the words capitalized for randomNouns1", () => {
      const result = capitalizeWords(randomNouns1);
      expect(result).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]);
    });
  
    it("returns an array with all the words capitalized for randomNouns2", () => {
      const result = capitalizeWords(randomNouns2);
      expect(result).toEqual(["Temperature", "Database", "Chopsticks", "Mango"]);
    });
  });
  