# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview. Tip: providing an example can help communicate your point if you struggle with the vocabulary.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

Type your initials here to confirm you read the instructions:

1. What is the difference between a parameter and an argument?

Your answer:
Parameter is a place holder
An argument is a value or expression

Researched answer:

In programming, the terms "parameter" and "argument" are related to functions and methods, and they refer to different concepts:

Parameter:

A parameter is a variable or placeholder in a function or method definition.
It is a way for the function to receive and work with data.
Parameters are part of the function's signature and are specified within the parentheses during the function declaration.
Example:

javascript
Copy code
function greet(name) {
  console.log(`Hello, ${name}!`);
}
In this example, name is a parameter.

Argument:

An argument is the actual value or expression passed to a function or method when it is called or invoked.
Arguments are the real data that gets assigned to the corresponding parameters during a function call.
They are provided within the parentheses when calling the function.
Example:

javascript
Copy code
greet("John");
In this example, "John" is an argument passed to the greet function.

In summary, a parameter is a variable in a function's definition, while an argument is the actual value passed to the function when it is called. Parameters act as placeholders that receive the values provided as arguments when the function is invoked.

2. What is the difference between an object and a class?

Your answer:
A class is a blueprint
An object is an instance of a case

Researched answer:
In object-oriented programming, particularly in languages like JavaScript, the terms "object" and "class" represent fundamental concepts:

1. **Class:**
   - A class is a blueprint or a template for creating objects.
   - It defines the properties (attributes) and behaviors (methods) that objects of that class will have.
   - Classes are essentially a way to encapsulate data and functionality into a single unit.
   - Objects are instances of a class, created based on the class blueprint.

   Example (JavaScript):
   ```javascript
   class Car {
     constructor(make, model) {
       this.make = make;
       this.model = model;
     }

     startEngine() {
       console.log(`${this.make} ${this.model}'s engine started.`);
     }
   }
   ```

2. **Object:**
   - An object is an instance of a class.
   - It is a concrete entity created from the class, and it has specific values for its properties.
   - Objects can call the methods defined in their class and interact with other objects.
   - Objects encapsulate state (property values) and behavior (methods) based on the class they belong to.

   Example (JavaScript):
   ```javascript
   const myCar = new Car("Toyota", "Camry");
   myCar.startEngine();
   ```

In summary, a class is a blueprint or template that defines the structure and behavior of objects, while an object is an instance of a class—a concrete realization of the blueprint with specific property values. Classes provide a way to structure and organize code, while objects represent actual instances with data and functionality.

3. What is iteration?

Your answer:
It will keep doing something until a desired outcome happens

Researched answer:
Iteration is the process of repeatedly executing a set of statements or operations. It involves the repetition of a certain block of code or a sequence of steps until a specific condition is met or for a specified number of times. Iteration is a fundamental concept in programming and is often used to loop through collections of data, perform calculations, or execute a certain task repeatedly.

Common constructs used for iteration in programming include:

1. **For Loop:**
   - Executes a block of code a specified number of times.
   - Syntax (in JavaScript):
     ```javascript
     for (initialization; condition; increment/decrement) {
       // code to be executed in each iteration
     }
     ```

2. **While Loop:**
   - Repeatedly executes a block of code as long as a specified condition is true.
   - Syntax:
     ```javascript
     while (condition) {
       // code to be executed in each iteration
     }
     ```

3. **Do-While Loop:**
   - Similar to a while loop, but the condition is checked after the block of code is executed, ensuring that the block of code is executed at least once.
   - Syntax:
     ```javascript
     do {
       // code to be executed in each iteration
     } while (condition);
     ```

4. **For...of and For...in Loops (in JavaScript):**
   - Used for iterating over elements in an iterable object (e.g., arrays, strings).
   - `for...of` iterates over iterable values.
   - `for...in` iterates over the enumerable properties of an object.

   Example (JavaScript):
   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   
   // Using for...of loop
   for (const number of numbers) {
     console.log(number);
   }
   ```

Iteration is a powerful and essential concept in programming, enabling the automation of repetitive tasks and the processing of data in a structured manner.