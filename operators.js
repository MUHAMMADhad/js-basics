// Operators Practice Questions.
/*1️⃣ Even or Odd
Write a program that checks if a number is even or odd using the modulus % operator. 
Input: 7
Output: Odd*/

// let num = 7;
// console.log(`Input: ${num}`);
// let result = num % 2 === 0 ? "Even" : "Odd";
// console.log(`Output: ${result}`);

/*2️⃣ Simple Calculator
Take two numbers and print:
Sum, Difference, Product, Division. 
Input: 10, 5
Output:
Sum = 15
Difference = 5
Product = 50
Division = 2*/
// Why -> Without let, variables become global variables (bad practice).
// let a = 10, b = 5;
// console.log(`Input: ${a}, ${b}`);
// let sum = a + b;
// let diff = a - b;
// let prod = a * b;
// let div = a / b;
// console.log(`Output: \n Sum = ${sum} \n Difference = ${diff} \n Product = ${prod} \n Division = ${div}`);

/*3️⃣ Check Greater Number
Create two variables and print which number is greater using comparison operators. 
a = 12
b = 20
Output: b is greater.*/

// let a = 12;
// let b = 20;
// console.log(`a = ${a}\n b = ${b}`);
// let result = (a > b) ? "a is greater" : (b > a) ? "b is greater": "Both are equal";
// console.log(`Output: ${result}`);

/*4️⃣ Check Positive, Negative or Zero.
Use comparison operators to determine if a number is:
Positive, Negative, Zero */

// let check = 5;
// console.log(`Check: ${check}`);
// let res = (check > 0) ? "Positive": (check < 0) ? "Negative": "Zero";
// console.log(`Output: ${res}`);

/*5️⃣ Age Eligibility
Check if a person is eligible to vote. 
Condition:
age >= 18 → Eligible
age < 18 → Not Eligible*/

// let age = 19;
// console.log(`Person age = ${age}`);
// let vote = (age >= 18) ? "Eligible" : "Not Eligible";
// console.log(`Result: ${vote}`);

/*9️⃣ Temperature Check.
If temperature is:
greater than 30 → Hot
between 20–30 → Normal
below 20 → Cold */

// let temp = 25;
// let check = (temp > 30) ? "Hot": (temp < 20) ? "Cold" : "Normal";
// console.log(`Today's temperature is: ${check}`);

/*🔟 Check Equality.
Create two variables and check:
==
=== */

// let c = 5;
// let d = "5";
// console.log("Using ==");
// console.log(c == d);
// console.log("Using ===");
// console.log(c === d);

/*Conditionals (if / else) with slightly harder questions like:
1️⃣ Largest of 3 numbers*/

const prompt = require("prompt-sync")();
// let num1 = prompt("Enter first number: ");
// let num2 = prompt("Enter second number: ");
// let num3 = prompt("Enter third number: ");

// if (num1 >= num2 && num1 >= num3) {
//     console.log(`Output: ${num1}`);
// } else if (num2 >= num1 && num2 >= num3){
//     console.log(`Output: ${num2}`);
// } else{
//     console.log(`Output: ${num3}`);
// }

//2️⃣ Leap year checker
/*Divisible by 4 → Leap
Divisible by 100 → Not leap
Divisible by 400 → Leap again*/

// let year = prompt(`Enter Year to check it is Leap Year or not: `);
// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
//     console.log(`Leap Year: ${year}`);
// }else {
//     console.log(`Not Leap Year: ${year}`);
// }

//3️⃣ Grade calculator

// let marks = prompt("Student marks: ");
// if (marks >= 90 && marks <= 100) {
//     console.log("Grade: A");
// } else if (marks >= 80 && marks <= 89) {
//     console.log("Grade: B");
// } else if (marks >= 70 && marks <= 79) {
//     console.log("Grade: C");
// } else if (marks >= 60 && marks <= 69) {
//     console.log("Grade: D");
// } else {
//     console.log("Grade: F")
// }

//4️⃣ Divisible by 3 and 5

// let num4 = prompt("Enter number: ");
// if(num4 % 3 === 0 && num4 % 5 === 0){
//     console.log(`Number is divisible by both: ${num4}`);
// } else{
//     console.log(`Number is not divisible by both: ${num4}`);
// }

// 5️⃣ Password strength checker	

// let pass = prompt('Enter password: ');

// if (pass.length < 6) {
//     console.log('Output: Very Weak');
// } else if (pass.length < 8) {
//     console.log('Output: Weak');
// } else if (pass.length < 12){
//     console.log('Output: Medium');
// } else {
//     console.log('Output: Strong');
// }

