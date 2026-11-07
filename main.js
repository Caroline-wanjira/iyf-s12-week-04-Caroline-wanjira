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



// ===== Task 7.2: Data Types & Operators =====

// Exercise 1: 
let a = 10;
let b = 3;

console.log(a + b);   // Addition
console.log(a - b);   // Subtraction
console.log(a * b);   // Multiplication
console.log(a / b);   // Division
console.log(a % b);   // Modulus (remainder)
console.log(a ** b);  // Exponentiation

// Increment/Decrement
let count = 0;
count++;  // count is now 1
console.log("Count after ++:", count);
count--;  // count is now 0
console.log("Count after --:", count);

// Exercise 2: String Operations
let firstName = "Caroline";
let lastName = "Wanjira";

// Concatenation
let fullName = firstName + " " + lastName;
console.log(fullName);

// Template literals (preferred)
let greeting = `Hello, ${firstName}!`;
let message = `${firstName} has ${firstName.length} letters.`;
console.log(greeting);
console.log(message);

// String methods
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(firstName.charAt(0));
console.log(fullName.includes("Caroline"));

// Exercise 3: Comparison & Logical Operators

// Comparison
console.log(5 > 3);      // true
console.log(5 < 3);      // false
console.log(5 === 5);    // true (strict equality)
console.log(5 == "5");   // true (loose equality - avoid!)
console.log(5 !== 3);    // true

// Logical
console.log(true && true);   // AND
console.log(true || false);  // OR
console.log(!true);          // NOT

// Challenge
let ageInDays = age * 365;
let ageInHours = ageInDays * 24;
let yearTurn100 = birthYear + 100;

console.log(`My age in days (approximately): ${ageInDays}`);
console.log(`My age in hours: ${ageInHours}`);
console.log(`I will turn 100 in the year: ${yearTurn100}`);

// ===== Task 7.3: Functions =====

// Exercise 1: Function Declarations

// Function declaration (with default values, which also covers Exercise 3)
function greet(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

// Function expression
const add = function (a, b) {
    return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

// Arrow function with body
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

console.log(greet("Caroline"));
console.log(add(5, 3));
console.log(multiply(4, 6));
console.log(divide(10, 2));
console.log(divide(10, 0));

// Exercise 2: Build These Functions

function calculateArea(width, height) {
    return width * height;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

function isEven(number) {
    return number % 2 === 0;
}

function getInitials(fullName) {
    return fullName
        .split(" ")
        .map((word) => word.charAt(0))
        .join("")
        .toUpperCase();
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log("Area:", calculateArea(5, 4));
console.log("25°C in Fahrenheit:", celsiusToFahrenheit(25));
console.log("Is 8 even?", isEven(8));
console.log("Is 7 even?", isEven(7));
console.log("Initials:", getInitials("Caroline Wanjira"));
console.log("Reversed:", reverseString("hello"));

// Exercise 3: Default Parameters

console.log(greet());                // Hello, Guest!
console.log(greet("Alice"));         // Hello, Alice!
console.log(greet("Bob", "Hi"));     // Hi, Bob!

// Build: calculateTip
function calculateTip(bill, tipPercent = 15) {
    return (bill * tipPercent) / 100;
}

console.log("Tip on 2000 at default 15%:", calculateTip(2000));
console.log("Tip on 2000 at 20%:", calculateTip(2000, 20));