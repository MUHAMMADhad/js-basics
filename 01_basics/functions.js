/* 1. Simple function
Write a function that prints "Hello, World!" */

// function hello() {
//     return "Hello, World!";
// }
// console.log(hello());
// function hello(){
//     console.log("Hello, World!");
// }
// hello();

/* 2. Addition function
Create a function that takes two numbers and returns their sum */

// function addNumbers(num1, num2) {
//     return num1 + num2;
// }
// console.log(addNumbers(10, 12));
// function addNumbers(num1, num2) {
//     console.log(num1 + num2);
// }
// addNumbers(10, 12);

/* 3. Even or odd
Function that takes a number and returns "Even" or "Odd" */

// const prompt = require('prompt-sync')();

// let num3 = Number(prompt('Enter a number: '));
// function evenOrOdd(num3, result) {
//     return num3 % 2 === 0 ? "Even" : "Odd";
// }
// let result = evenOrOdd(num3);
// console.log(`Output: ${num3} is ${result}`);

/*4. Square of a number
Function that returns the square of a number */

// let num4 = Number(prompt('Enter a number: '));
// function square(num4) {
//     return num4 ** 2;
// }
// console.log(`Output: Square of ${num4} is ${square(num4)}`);

/*Write a function that takes an object person and returns their full name.
{ firstName: "Ali", lastName: "Khan" } */
// let person = {
//     firstName: "Ali",
//     lastName: "Khan"
// };
// function getFullName(person) {
//     return `${person.firstName} ${person.lastName}`;
// }
// console.log(getFullName(person));

/*Create a function that updates the age property of an object:
updateAge(person, newAge) */

// let ageObj = {
//     name: "Ali",
//     age: 25
// };
// let newAge = Number(prompt('Enter new age: '));
// function updateAge(ageObj, newAge) {
//     ageObj.age = newAge;
//     return ageObj;
// }
// console.log(updateAge(ageObj, newAge));

/*1. Closure Challenge
Write a function counter() that returns another function.
Each time you call it, it should increase the count. 
Try to do it without using global variables.*/
// Also add a reset function to reset the count to zero.
/*Try adding:
A function set(value) to manually set count
Prevent count from going below 0 */

// function counter() {
//     let count = 0;
//     function increment() {
//         count++;
//         return count;
//     }
//     function reset() {
//         count = 0;
//         return count;
//     }
//     function set(value) {
//         count = value >= 0 ? value : count; 
//         // Preset count only if value is non-negative
//         return count;
//     }
//     return {
//         increment: increment,
//         reset: reset,
//         set: set
//     };
// }
// const myCounter = counter();
// console.log(myCounter.increment()); // Output: 1
// console.log(myCounter.increment()); // Output: 2
// console.log(myCounter.reset());     // Output: 0
// console.log(myCounter.increment()); // Output: 1
// console.log(myCounter.set(5));     // Output: 5
// console.log(myCounter.increment()); // Output: 6
// console.log(myCounter.set(-3));    // Output: 6 (count remains unchanged)

// function outer() {
//     let x = 10;
//     function inner() {
//         return x;
//     }
//     return inner;
// }
// let fn = outer();
// console.log(fn());
