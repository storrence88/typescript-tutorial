var person = 'Steven';
var age = 31;
var hasBlondeHair = false;
// =====================================================================
// In typescript, we can change the value of a variable but not the type
// =====================================================================
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
// ======================================================================
// In typescript, we can define the type expected for function parameters
// ======================================================================
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
// ===============================
// Working with Arrays and Objects
// ===============================
// --- Arrays ---
// Declare an array with all string types
var names = ['Steven', 'Meredith', 'Tiffany', 'Jose'];
// This works because we are pushing a string value into the array of strings
names.push('Murphy');
// This doesn't work and typescript won't compile
// names.push(88); // Argument of type 'number' is not assignable to parameter of type 'string'
// Typescript won't even allow us to change a current value with something other than a string
// names[0] = false; // Type 'boolean' is not assignable to type 'string'
// Declare an array with all number types
var numbers = [10, 20, 30, 40, 50];
// Pushing a number value is fine
numbers.push(60);
numbers.unshift(0);
// We can't push or unshift a value that doesn't match the type in the array of numbers
// numbers.push('red'); // Argument of type 'string' is not assignable to parameter of type 'number'
// Typescript won't even allow us to change a current value with something other than a number
// numbers[1] = true; // Type 'boolean' is not assignable to type 'number'
// Declare an array with mixed values
var mixed = ['blue', 42, 'blue', 42, 'hut!'];
// This works
mixed.push('completion');
mixed.push(100);
// This doesn't work because the mixed array only contains strings or numbers, not booleans
// mixed.push(true); // Argument of type 'boolean' is not assignable to parameter of type 'string | number'
// We can also change any position inside the mixed array with another string or number
mixed[2] = '55 is the mike';
mixed[0] = 0;
