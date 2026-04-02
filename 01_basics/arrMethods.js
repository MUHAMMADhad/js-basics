// Array Methods (filter, map and reduce)
// Given an array of numbers, return only the even numbers.

// const nums = [1, 2, 3, 4, 5, 6];
// let myNums = nums.filter( (even) => even % 2 === 0);
// console.log(myNums);

// Filter out all numbers greater than 10.

// const nums = [5, 12, 8, 130, 44];
// let greater = nums.filter( (myNums) => { return myNums > 10 } );
// console.log(greater);

// From an array of strings, return only strings with length greater than 4.

// const words = ["cat", "elephant", "dog", "giraffe"];
// let myWords = words.filter( (animals) => animals.length > 4);
// console.log(myWords);

// Remove all falsy values (false, 0, "", null, undefined, NaN) from an array.

// const arr = [0, "hello", false, "", 42, null];
// let myArr = arr.filter(Boolean);
// console.log(myArr);

// Filter objects where age is greater than 18.

// const users = [
//   { name: "Ali", age: 17 },
//   { name: "Sara", age: 22 },
//   { name: "John", age: 19 }
// ];

// let myUsers = users.filter( (users) => { return users.age > 18} );
// console.log(myUsers);

// Get all products that are in stock.

// const products = [
//   { name: "Laptop", inStock: true },
//   { name: "Phone", inStock: false },
//   { name: "Tablet", inStock: true }
// ];

// let myProducts = products.filter( (products) => products.inStock === true);
// console.log(myProducts);

// Filter names that start with the letter "A".

// const names = ["Ali", "Ahmed", "Sara", "Ayesha"];
// let arrNames = names.filter( (names) => names.includes('A'));
// console.log(arrNames);

// filter + map (together)

// const users = [
//   { name: "Ali", age: 17 },
//   { name: "Sara", age: 22 },
//   { name: "John", age: 19 }
// ];

// 👉 Output: ["Sara", "John"]

// let myUsers = users
// .filter ( (user) => user.age >= 19 && user.name.length === 4)
// .map ( (user) => user.name);
// console.log(myUsers);

// const products = [
//   { name: "Laptop", price: 1000, inStock: true },
//   { name: "Phone", price: 500, inStock: false },
//   { name: "Tablet", price: 300, inStock: true }
// ];

// 👉 Output: ["Laptop", "Tablet"]

// let myProducts = products
// .filter ( (prod) => prod.inStock && prod.price >= 300)
// .map ((prod) => prod.name);
// console.log(myProducts);

// const users = [
//   { name: "Ali", age: 17, active: true },
//   { name: "Sara", age: 22, active: false },
//   { name: "John", age: 19, active: true }
// ];

// 👉 Output: ["John"]

// let usr = users
// .filter ((user) => user.active && user.age >= 18 )
// .map (user => user.name)
// console.log(usr);

// Reduce
// Use reduce() to get the sum of all numbers

// const numbers = [1, 2, 3, 4, 5];
// let myNum = numbers.reduce(function (acc, curr) { 
//     console.log(`acc: ${acc} and curr: ${curr}`); 
//     return acc + curr 
// }, 0);
// console.log(myNum);

// Use reduce() to get only the sum of even numbers
// const numbers = [1, 2, 3, 4, 5, 6];
// let myNum = numbers.reduce(function(acc, curr) {
//     if (curr % 2 === 0) {
//         return acc + curr;  // Add numbers
//     } else {
//         return acc;  // ignore add numbers
//     }
// }, 0);
// console.log(myNum);


// Use reduce() to count how many times each word appears
// const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
// let result = words.reduce(function (acc, curr) {
//     if (acc[curr]){
//         acc[curr] += 1;
//     } else {
//         acc[curr] = 1;
//     }
//     return acc;
// }, {});
// console.log(result);