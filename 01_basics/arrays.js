// Array

// const myArr = [0, 1, 2, 3, 4, 5]
// const myHeors = ["shaktiman", "naagraj"]

// console.log(myArr[1]);

// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2[1]);

// Arrays Methods

// push() an element in the end position of array.
// myArr.push(6)
// myArr.push(7)

// pop() an element from the end position of array.
// myArr.pop()

// unshift() means to add up an element in the first position of array.
// myArr.unshift(9)

// shift() means to remove an element from the first position of array.
// myArr.shift()

// Checks the element in the array that it is includes or not (true or false answer).
// console.log(myArr.includes(9));

/* Tells that the element in the array is occuring if the element is 
not in the array then it gives -1 value which is false.*/
// console.log(myArr.indexOf(3));

// Converts the array into string.
// const newArr = myArr.join()

// console.log(newArr);
// console.log(myArr);

// slice, splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)
// console.log(myn1);
// console.log("B ", myArr);


// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);

/*1. Create an array of 5 numbers and:
add one number at the end
remove the first element
print final array */

// let numArr = [6, 7, 8, 9, 10];
// let newArr = [...numArr.slice(1), 11];
// numArr.push(11);
// numArr.shift();
// console.log(newArr);

/* 2. Given:
const arr = [10, 20, 30, 40]
Check if 20 exists
Find index of 30 */

// const arr = [10, 20, 30, 40];
// console.log(arr.includes(20));
// console.log(arr.indexOf(30));

// const myString = "Hadi";
// console.log([...myString]);

// const arr = Array.of(5, 10, 15);
// console.log(arr);

// const arr = [1, 2, 3, 4, 5];
// arr.splice(startIndex, deleteCount)
// arr.splice(2, 2);
// console.log(arr);

// const arr = [1, 2, 5, 6];
// arr.splice(2, 0, 3, 4);
// console.log(arr);

// const arr = [10, 20, 30, 40];
// arr.splice(1, 2, 25, 35);
// console.log(arr);