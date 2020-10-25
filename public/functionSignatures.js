"use strict";
// ===================
// Function Signatures
// ===================
// In typescript, we can explicitly set a variable to a type of Function but we can also take this
// a step further and explicitly set the types of the function parameters and the return type of the function
// Example 1
var greetings;
greetings = function (name, greeting) {
    console.log(name + " says " + greeting + "!");
};
console.log(greetings('Steve', 'Hello'));
// Example 2
var calc;
calc = function (num1, num2, action) {
    if (action === 'add') {
        return num1 + num2;
    }
    else {
        return num1 - num2;
    }
};
// Example 3
var logDetail;
logDetail = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " years old.");
};
console.log(logDetail({ name: 'Scout', age: 10 }));
