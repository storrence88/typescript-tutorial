"use strict";
// ==============
// Function Types
// ==============
// Just like our other variables, we can declare a Function (with a capital F) type
let greet;
// In the future, we won't be able to set the variable greet to anything other than a function
// None of these will work:
// greet = 'Hello!'; // Type 'string' is not assignable to type 'Function'.
// greet = 12; // Type 'number' is not assignable to type 'Function'.
// This will work
greet = () => {
    console.log('Hello world!');
};
// ----- Function Parameters Types -----
// We can explicitly set the types for each of the function parameters
// We can also set an optional parameter using the "?"
// Lastly, we can set a default value as the last parameter for the function
const add = (a, b, c = 20) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10);
// ----- Function Return Type and Void -----
// We can explicitly set a function to return a certain type
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 7);
// If a function doesn't return anything, we can set its type to void
const multiply = (a, b) => {
    console.log(a * b);
};
const logDetails = (uuid, item) => {
    console.log(`${item} has a uuid of ${uuid}`);
};
const greeter = (user) => {
    console.log(`${user.name} says hello!`);
};
