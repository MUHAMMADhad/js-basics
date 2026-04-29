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
// let el = document.getElementById("text");
// el.style.color = "red";
// el.style.fontSize = "20px";
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


// Question 4: Hide and show element
function hide() {
    document.getElementById("text2").style.display = "none";
}

function show() {
    document.getElementById("text2").style.display = "block";
}

// Question 5: Change image on click
function changeImage() {
    let img = document.getElementById("pic").src;
    if (img.includes("download.jpg")) {
        document.getElementById("pic").src = "assets/another.jpg";
    }
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

let colorInput = document.getElementById("colorInput");
let colorText = document.getElementById("colorText");

function changeTextColor() {
    let color = colorInput.value;
    colorText.style.color = color;
}

/*Try building this:
Input field
Button
When clicked → show input text inside a <div>
Change color of the text
 */

// let textInput = document.getElementById("textInput");
// let showTextDiv = document.getElementById("showText");

// function showText() {
//     let text3 = textInput.value;
//     showTextDiv.innerText = text3;
// }

// function changeColor() {
//     showTextDiv.style.color = "red";
// }

/* Practice Task:
Input field
Button "Add"
Each time you click → text gets added to a list (not replaced)
Input clears after adding
*/

// TODO app with ADD, DELETE. (Basic)
let textInput = document.getElementById("textInput");
let list = document.getElementById("list");

function addItem() {
    let li = document.createElement("li"); // <ul> -> <li>
    let text = document.createElement("span");  // <ul> -> <li> <span> </span> </li>
    text.innerText = textInput.value; // <ul> -> <li> <span> Text </span> </li>
    text.onclick = function () {
        li.style.textDecoration = "line-through";
    }
    let deleteBtn = document.createElement("button"); // <ul> -> <li> <span> Text </span> <button> </button> </li>
    deleteBtn.innerText = "Delete"; // // <ul> -> <li> <span> Text </span> <button> Delete </button> </li>
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.onclick = function () {
        li.remove();
    }
    li.appendChild(text);
    li.appendChild(deleteBtn);
    list.appendChild(li);   
    textInput.value = "";
}
