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

const prompt = require('prompt-sync')();

// let num3 = Number(prompt('Enter a number: '));
// function evenOrOdd(num3, result) {
//     return num3 % 2 === 0 ? "Even" : "Odd";
// }
// let result = evenOrOdd(num3);
// console.log(`Output: ${num3} is ${result}`);

/*4. Square of a number
Function that returns the square of a number */

let num4 = Number(prompt('Enter a number: '));
function square(num4) {
    return num4 ** 2;
}
console.log(`Output: Square of ${num4} is ${square(num4)}`);