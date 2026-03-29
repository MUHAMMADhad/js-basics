/*Project: User Profile Manager
Build a CLI app that manages a single user using an object.
-> Features:
1. Create a user
2. Update user info
3. View user info
-> What you’ll practice:
Accessing object properties
Updating values
Taking user input
Conditionals (if/else)
👉 This strengthens your object knowledge before adding complexity.*/

const prompt = require("prompt-sync")();

// using objects
let userProfile = {
    name: "",
    age: 0,
    email: ""
};

// function of createUser()
function createUser(name, age, email) {
    userProfile.name = name;
    userProfile.age = age;
    userProfile.email = email;

    console.log("\nUser profile successfully created!");
}

// function of updateUserInfo()
function updateUserInfo() {
    // if user account does not exists.
    if (!userProfile.name) {
        console.log("Please create user profile!");
        return;
    }
    // if user account exists.
    const field = prompt("What do you want to update (name, age or email)?")
        .toLowerCase().trim();
    if (field in userProfile) {
        let newValue = prompt(`Enter new ${field}: `).trim();
        if (field === "age") {
            newValue = Number(newValue);
            if (isNaN(newValue) || newValue <= 0) {
                console.log("Invalid age!");
                return;
            }
        }
        userProfile[field] = newValue;
        console.log("\nUser Profile updated successfully!");
        console.log("\nUpdated Profile: ", userProfile);
    } else {
        console.log("Invalid field!");
    }
}

// function of viewUserInfo()
function viewUserInfo() {
    // if user account does not exists.
    if (!userProfile.name) {
        console.log("Please create user profile!");
        return;
    }
    const keys = Object.keys(userProfile);

    console.log("\n----- User Profile -----");
    keys.forEach(field => {
        console.log(`\n${field}: ${userProfile[field]}`);
    });
    console.log("\n--------------------------");
}

// Menu System
console.log("\n---------- Welcome to User Profile Manager ----------");
function main() {
    let running = true;
    while (running) {
        console.log("1. Create User Profile");
        console.log("2. Update User Profile");
        console.log("3. View User Profile");
        console.log("4. Exit");
        const choice = prompt("What you wanna choose (1 - 4): ");
        switch (choice) {
            case '1':
                const name = prompt("Enter your name:");
                const age = Number(prompt("Enter your age:"));
                const email = prompt("Enter your email:");
                createUser(name, age, email);
                break;
            case '2':
                updateUserInfo();
                break;
            case '3':
                viewUserInfo();
                break;
            default:
                running = false;
                console.log("Thank you for using the User Profile Manager!");
                break;
        }
    }
}
main();

