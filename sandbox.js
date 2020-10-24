var person = 'Steven';
var age = 31;
var hasBlondeHair = false;
// ------
// In typescript, we can change the value of a variable but not the type
// ------
// This won't work because it's trying to change the variable type to a number
// person = 20;
// This is fine because the type is still a string
person = 'Mere';
// This won't work because it's trying to change the variable type to a string
// age = 'string';
// This is fine because the type is still a number
age = 13;
// This won't work because it's trying to change the variable type to a number
// hasBlondeHair = 12;
// This is fine because the type is still a boolean
hasBlondeHair = true;
// ------
// In typescript, we can define the type expected for function parameters
// ------
// Function WITHOUT explicit parameter type defined
var circumference = function (diameter) {
    return diameter * Math.PI;
};
// Right now I could pass any value into the circumference method even if it doesn't make sense
console.log(circumference('hello')); // NaN
// Function WITH explicit argument typed defined
var typedCircumference = function (diameter) {
    return diameter * Math.PI;
};
// Our editor will point out the error if we try and pass in a value other than the type defined
// console.log(typedCircumference('hello')); // Found 1 error. Will not compile
// No errors found and compiles successfully!
// Clean code and fewer errors in the browser!
console.log(typedCircumference(45));
