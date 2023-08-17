// import { apiKey } from "./util.js";
//console.log(apiKey);
// import apiKey from "./util.js";
// import { apiKey, abc as content } from "./util.js";
// import * as util from "./util.js";
//console.log(util.apiKey);
//console.log(content);

//let userMessage = 'Hello world!'

//const must not be reassigned!
//const userMessage = 'Hello world!'
//console.log(userMessage);

// function createGreeting(userName, message = "hello!") {
//   //console.log(userName);
//   //console.log(message);
//   return "Hi, I am " + userName + ". " + message;
// }

// const greeting1 = createGreeting('Zeynep')
// console.log(greeting1);
// const greeting2 =createGreeting("Zeynep", "hello, whats up");
// console.log(greeting2);

// export default (userName, message) => {
//   console.log("Hello");
//   return userName + message;
// };

// // object may contain functions which named as methods
// const user = {
//   name: "Zeynep",
//   age: 22,
//   greet() {
//     console.log("hello");
//     console.log(this.age);
//   },
// };

// console.log(user.age);
// user.greet();

// //for class names, should start with a capital
// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log("Hi");
//   }
// }
// const user1 = new User ('Zeynep', 22);
// console.log(user1);
// user1.greet

// const hobbies = ["Sports", "Cooking", "Reading"];
// console.log(hobbies[0]);

// hobbies.push("Working");
// console.log(hobbies);

// const index = hobbies.findIndex((item) => item === "Sports");
// console.log(index);

// const editedHobbies = hobbies.map((item) => ({text: item}) + "!");
// console.log(editedHobbies);

//DESTRUCTURING
// const [firstName, lastName] = ["Zeynep", "Ermis"];
// console.log(firstName);
// console.log(lastName);

// const { name: userName, age } = {
//   name: "Zeynep",
//   lastName: 22,
// };

// console.log(userName);
// console.log(age);

//The Spread Operator
// const hobbies = ["Sports", "Cooking"];
// const newHobbies = ["Reading"];
// const mergedHobbies = [...hobbies, ...newHobbies];
// console.log(mergedHobbies);

// const user = {
//   name: "Zeynep",
//   lastName: 22,
// };

// const extendedUser = {
//   isAdmin: true,
//   ...user
// }

// console.log(extendedUser)

//Control Structures
// const password = prompt("Your Password");

// if (password === "Hello") {
//   console.log("Hello works");
// } else if (password === "hello") {
//   console.log("hello works");
// } else {
//   console.log("Access not granted.");
// }

// const hobbies = ["Sports", "Cooking"];
// for (const hobby of hobbies) {
//   console.log(hobby);
// }

//Using Functions as Values
// function handleTimeout() {
//   console.log("Timed out!");
// }

// const handleTimeout2 = () => {
//   console.log("Timed out.... again!");
// };

// //can pass functions as values to other functions
// setTimeout(handleTimeout, 2000);
// setTimeout(handleTimeout2, 3000);
// setTimeout(() => {
//   console.log("More timing out...");
// }, 4000);

// function greeter(greetFn) {
//   greetFn();
// }

// //this function here is passed as value to greetFn then greetFn() executed
// greeter(() => console.log("Hi"));

//Defining Functions Inside of Functions

// function init() {
//   function greet() {
//     console.log("Hi!");
//   }
//   //greet function is only available in the init function
//   greet();
// }

// init();

//Reference vs Primitive Values

// const hobbies = ["Sports", "Cooking"];
// hobbies.push("working");
// console.log(hobbies);
