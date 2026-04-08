// 1. Basic DOM Properties Examples
// Example 1: Accessing Elements
let heading = document.getElementById("title");
console.log(heading.innerText);
// Properties used: innerText, getElementById()

// Example 2: Changing content
let para = document.getElementById("demo").innerHTML = "New Text";
console.log(para);
// Property used: innerHTML

// Example 3: Changing CSS using DOM
let el = document.getElementById("text");
el.style.color = "red";
el.style.fontSize = "20px";
// Property used: style

// Example 4: Getting attribute values
let source = document.getElementById("image").src;
console.log(source);
// Property used: src

// Example 5: Form input value
let input = document.getElementById("name").value;
console.log(input); 
// Property used: value

// 2. Practice Questions + Solutions
// Question 1: Change text on button click
let paragraph = document.getElementById("para");
function changeText() {
    paragraph.innerText = "Welcome";
}

// Question 2: Change background color
let bgColor = document.getElementById("box");
function changeBgColor() {
    bgColor.style.backgroundColor = "yellow";
} 

// Question 3: Get input value and display it
function showValue() {
    let val = document.getElementById("userInput").value;
    document.getElementById("result").innerText = val;
}

/*3. Important DOM Properties List:
You should practice these:
innerHTML
innerText
value
style
src
href
className
id 

4. Mini Challenge (Try Yourself 💡)
👉 Change text color based on user input:
Task:
User enters a color name
Text color should change to that color.*/