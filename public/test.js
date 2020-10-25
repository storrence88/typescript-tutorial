"use strict";
// ==============
// Function Types
// ==============
// Just like our other variables, we can declare a Function (with a capital F) type
var greet;
// In the future, we won't be able to set the variable greet to anything other than a function
// None of these will work:
// greet = 'Hello!'; // Type 'string' is not assignable to type 'Function'.
// greet = 12; // Type 'number' is not assignable to type 'Function'.
// This will work
greet = function () {
    console.log('Hello world!');
};
// ----- Function Parameters Types -----
// We can explicitly set the types for each of the function parameters
// We can also set an optional parameter using the "?"
// Lastly, we can set a default value as the last parameter for the function
var add = function (a, b, c) {
    if (c === void 0) { c = 20; }
    console.log(a + b);
    console.log(c);
};
add(5, 10);
// ----- Function Return Type and Void -----
// We can explicitly set a function to return a certain type
var minus = function (a, b) {
    return a - b;
};
var result = minus(10, 7);
// If a function doesn't return anything, we can set its type to void
var multiply = function (a, b) {
    console.log(a * b);
};
