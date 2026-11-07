// Variable declarations — use YOUR details
let name = "Caroline";
let age = 26;
const birthYear = 2000;
let isStudent = true;
let favoriteColors = ["turquoise", "green", "purple"];
let today = new Date();

// typeof operator
console.log(typeof name);    // string
console.log(typeof age);     // number
console.log(typeof true);    // boolean
console.log(typeof favoriteColors); // object
console.log(typeof today);   // object

// let vs const
let score = 100;
score = 150;  // Works!

const PI = 3.14159;
// PI = 3;  // Error! const cannot be reassigned