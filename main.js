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


// ===== Task 7.4: 

// Exercise 1: If/Else Statements
function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log("Grade for 95:", getGrade(95));
console.log("Grade for 85:", getGrade(85));
console.log("Grade for 72:", getGrade(72));
console.log("Grade for 65:", getGrade(65));
console.log("Grade for 40:", getGrade(40));

// Exercise 2: Switch Statements
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid day";
    }
}

console.log("Day 0:", getDayName(0));
console.log("Day 3:", getDayName(3));
console.log("Day 6:", getDayName(6));
console.log("Day 9:", getDayName(9));

// Exercise 3: Loops

// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While loop (named whileCount because "count" is already used above)
let count = 0;
while (count < 5) {
    console.log(count);
    Count++;
}

// For...of (arrays)
const colors = ["red", "green", "blue"];
for (const color of colors) {
    console.log(color);
}

// Build these programs:

// 1. Print numbers 1-100
for (let n = 1; n <= 100; n++) {
    console.log(n);
}

// 2. Print only even numbers 1-50
for (let n = 1; n <= 50; n++) {
    if (n % 2 === 0) {
        console.log(n);
    }
}

// 3. FizzBuzz
for (let n = 1; n <= 100; n++) {
    if (n % 3 === 0 && n % 5 === 0) {
        console.log("FizzBuzz");
    } else if (n % 3 === 0) {
        console.log("Fizz");
    } else if (n % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(n);
    }
}

// 4. Print a triangle of stars
for (let row = 1; row <= 5; row++) {
    console.log("*".repeat(row));
}


// ===== Mini-Project: Calculator =====

function addNumbers(a, b) {
    return a + b;
}

function subtractNumbers(a, b) {
    return a - b;
}

function multiplyNumbers(a, b) {
    return a * b;
}

function divideNumbers(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return addNumbers(num1, num2);
        case "-":
            return subtractNumbers(num1, num2);
        case "*":
            return multiplyNumbers(num1, num2);
        case "/":
            return divideNumbers(num1, num2);
        case "%":
            if (num2 === 0) {
                return "Error: Cannot divide by zero";
            }
            return num1 % num2;
        case "**":
            return num1 ** num2;
        default:
            return "Invalid operator";
    }
}

// Test
console.log(calculate(10, "+", 5));   // 15
console.log(calculate(10, "-", 5));   // 5
console.log(calculate(10, "*", 5));   // 50
console.log(calculate(10, "/", 5));   // 2
console.log(calculate(10, "/", 0));   // Error message
console.log(calculate(10, "%", 3));   // 1
console.log(calculate(2, "**", 3));   // 8
console.log(calculate(10, "&", 3));   // Invalid operator

o
// ===== Task 8.1: Arrays =====

// Exercise 1: Array Basics

// Creating arrays
const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
const mixed = ["hello", 42, true, null];

// Accessing elements
console.log(fruits[0]);      // apple
console.log(fruits.length);  // 3

// Modifying arrays
fruits.push("grape");        // Add to end
fruits.unshift("mango");     // Add to start
fruits.pop();                // Remove from end
fruits.shift();              // Remove from start
console.log("Fruits now:", fruits);

// Exercise 2: Array Methods

// forEach - do something with each element
numbers.forEach(num => console.log(num * 2));

// map - transform each element
const doubled = numbers.map(num => num * 2);

// filter - keep elements that pass a test
const evenNumbers = numbers.filter(num => num % 2 === 0);

// find - get first element that passes test
const firstEven = numbers.find(num => num % 2 === 0);

// reduce - combine all elements
const sum = numbers.reduce((total, num) => total + num, 0);

// includes - check if element exists
console.log(numbers.includes(3)); // true

console.log("Doubled:", doubled);
console.log("Even numbers:", evenNumbers);
console.log("First even:", firstEven);
console.log("Sum:", sum);

// Build: Use array methods to:
const sampleNumbers = [-5, 3, 12, -2, 8, 15];

// 1. Double all numbers in an array
const doubledSample = sampleNumbers.map(num => num * 2);
console.log("1. Doubled:", doubledSample);

// 2. Filter out negative numbers
const noNegatives = sampleNumbers.filter(num => num >= 0);
console.log("2. No negatives:", noNegatives);

// 3. Find the first number greater than 10
const firstOverTen = sampleNumbers.find(num => num > 10);
console.log("3. First number over 10:", firstOverTen);

// 4. Calculate the product of all numbers
const product = sampleNumbers.reduce((total, num) => total * num, 1);
console.log("4. Product:", product);

// ===== Task 8.2: Objects =====

// Exercise 1: Object Basics

const person = {
    firstName: "Caroline",
    lastName: "Wanjira",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "coding", "dancing"],
    address: {
        city: "Nairobi",
        country: "Kenya"
    }
};

// Accessing properties
console.log(person.firstName);       // Dot notation
console.log(person["lastName"]);     // Bracket notation
console.log(person.address.city);    // Nested

// Modifying properties
person.age = 31;
person.phone = "0712 345 678";       // Add new property
delete person.isStudent;             // Remove property
console.log("Person now:", person);

// Exercise 2: Object Methods

const calculator = {
    add: function (a, b) {
        return a + b;
    },
    // Shorthand method syntax
    subtract(a, b) {
        return a - b;
    },
    // Arrow function
    multiply: (a, b) => a * b
};

console.log(calculator.add(5, 3));
console.log(calculator.subtract(10, 4));
console.log(calculator.multiply(6, 7));

// Exercise 3: Object Iteration

const scores = {
    math: 95,
    english: 88,
    science: 92
};

// Get keys
console.log(Object.keys(scores));     // ["math", "english", "science"]

// Get values
console.log(Object.values(scores));   // [95, 88, 92]

// Get entries
console.log(Object.entries(scores));  // [["math", 95], ["english", 88], ["science", 92]]

// Loop through
for (const [subject, score] of Object.entries(scores)) {
    console.log(`${subject}: ${score}`);
}

// ===== Task 8.3: Array of Objects =====

const students = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }
];


// 1. Get all student names
const names = students.map(student => student.name);
console.log("1. Names:", names);

// 2. Get students with grade > 80
const highAchievers = students.filter(student => student.grade > 80);
console.log("2. High achievers:", highAchievers);

// 3. Find the student named "Charlie"
const charlie = students.find(student => student.name === "Charlie");
console.log("3. Charlie:", charlie);

// 4. Calculate average grade
const avgGrade = students.reduce((total, student) => total + student.grade, 0) / students.length;
console.log("4. Average grade:", avgGrade);

// 5. Get CS majors only
const csMajors = students.filter(student => student.major === "CS");
console.log("5. CS majors:", csMajors);

// 6. Sort by grade (highest first)
const sortedByGrade = [...students].sort((x, y) => y.grade - x.grade);
console.log("6. Sorted by grade:", sortedByGrade);

// 7. Check if any student has grade > 90
const hasTopStudent = students.some(student => student.grade > 90);
console.log("7. Any student above 90?", hasTopStudent);

// 8. Check if all students are passing (grade >= 60)
const allPassing = students.every(student => student.grade >= 60);
console.log("8. All passing?", allPassing);