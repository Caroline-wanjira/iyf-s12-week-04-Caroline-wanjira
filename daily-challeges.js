// Day 1: FizzBuzz
function fizzBuzz() {
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
}
fizzBuzz();

// Day 2: Reverse a String

//  loop
function reverseStringLoop(text) {
    let reversed = "";
    for (let i = text.length - 1; i >= 0; i--) {
        reversed += text[i];
    }
    return reversed;
}

// built-in methods
function reverseStringBuiltIn(text) {
    return text.split("").reverse().join("");
}

console.log("Day 2 (loop):", reverseStringLoop("hello"));         // olleh
console.log("Day 2 (built-in):", reverseStringBuiltIn("hello"));  // olleh

// Day 3: Find Largest Number

// loop (no Math.max)
function findLargestLoop(list) {
    let largest = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i] > largest) {
            largest = list[i];
        }
    }
    return largest;
}

//  reduce
function findLargestReduce(list) {
    return list.reduce((max, current) => (current > max ? current : max), list[0]);
}

console.log("Day 3 (loop):", findLargestLoop([3, 17, 8, 42, 5]));    // 42
console.log("Day 3 (reduce):", findLargestReduce([3, 17, 8, 42, 5])); // 42

// Day 4: Remove Duplicates


function removeDuplicatesSet(list) {
    return [...new Set(list)];
}

// filter
function removeDuplicatesFilter(list) {
    return list.filter((item, index) => list.indexOf(item) === index);
}

console.log("Day 4 (Set):", removeDuplicatesSet([1, 2, 2, 3, 4, 4, 5]));       // [1, 2, 3, 4, 5]
console.log("Day 4 (filter):", removeDuplicatesFilter([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

// Day 5: Palindrome Checker
function isPalindrome(text) {
    const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleaned === cleaned.split("").reverse().join("");
}

console.log("Day 5:", isPalindrome("racecar"));                      // true
console.log("Day 5:", isPalindrome("hello"));                        // false
console.log("Day 5:", isPalindrome("A man a plan a canal Panama"));  // true