let person = 'Steven';
let age = 31;
let hasBlondeHair = false;

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
const circumference = (diameter) => {
  return diameter * Math.PI;
};

// Right now I could pass any value into the circumference method even if it doesn't make sense
console.log(circumference('hello')); // NaN

// Function WITH explicit argument typed defined
const typedCircumference = (diameter: number) => {
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

// ---- Arrays ----
// Declare an array with all string types
let names = ['Steven', 'Meredith', 'Tiffany', 'Jose'];

// This works because we are pushing a string value into the array of strings
names.push('Murphy');

// This doesn't work and typescript won't compile
// names.push(88); // Argument of type 'number' is not assignable to parameter of type 'string'

// Typescript won't even allow us to change a current value with something other than a string
// names[0] = false; // Type 'boolean' is not assignable to type 'string'

// Declare an array with all number types
let numbers = [10, 20, 30, 40, 50];

// Pushing a number value is fine
numbers.push(60);
numbers.unshift(0);

// We can't push or unshift a value that doesn't match the type in the array of numbers
// numbers.push('red'); // Argument of type 'string' is not assignable to parameter of type 'number'

// Typescript won't even allow us to change a current value with something other than a number
// numbers[1] = true; // Type 'boolean' is not assignable to type 'number'

// Declare an array with mixed values
let mixed = ['blue', 42, 'blue', 42, 'hut!'];

// This works
mixed.push('completion');
mixed.push(100);

// This doesn't work because the mixed array only contains strings or numbers, not booleans
// mixed.push(true); // Argument of type 'boolean' is not assignable to parameter of type 'string | number'

// We can also change any position inside the mixed array with another string or number
mixed[2] = '55 is the mike';
mixed[0] = 0;

// ---- Objects ----

// When we declare an object in TS, the keys act just like normal variables and can't change their type
let developer = {
  name: 'steven',
  experience: 2,
  age: 31
};

// Both of these actions are fine
developer.name = 'Juan';
developer.age = 27;

// This will not work because the type of age should be a number, not a string
// developer.age = '27'; // Type 'string' is not assignable to type 'number'

// We also can't add new properties to the developer object
// developer.languages = ['ruby', 'javascript', 'python']; // Property 'languages' does not exist on type '{ name: string; experience: number; age: number; }'

// If I wanted to change the values in my object, I can but the new object MUST match the structure of the original object
//developer = ''; // Type 'string' is not assignable to type '{ name: string; experience: number; age: number; }'

// I also can't change the type of a property. I can only change it's value.
// developer = {
//   name: 'Mike',
//   experience: 2,
//   age: '44'
// }; // Type 'string' is not assignable to type 'number'. The expected type comes from property 'age' which is declared here on type '{ name: string; experience: number; age: number; }'

// I also can't add new properties to the object. It has to match the structure of the original object exactly, but the values can change as long as the types match
// developer = {
//   name: 'Frank',
//   experience: 15,
//   age: 55,
//   languages: ['ruby', 'c++']
// }; // Type '{ name: string; experience: number; age: number; languages: string[]; }' is not assignable to type '{ name: string; experience: number; age: number; }'
// Object literal may only specify known properties, and 'languages' does not exist in type '{ name: string; experience: number; age: number; }'

// ========================
// Explicit and Union Types
// ========================

// Typescript automatically infers the variable type based on the value we give it
// However, sometimes we want to initialize a variable without giving it a value

// ---- Explicit Variable Types ----
let firstName: string;
let lastName: string;
let num: number;
let isLoggedIn: boolean;

// If we later want to set a value, we can only set values that match the type we established above

// Works fine
firstName = 'Steve';

// Doesn't work and won't compile
// lastName = 32; //Type 'number' is not assignable to type 'string'.

// ---- Explicit Array Types ----

// Set a string array type
let strArr: string[];
// Set a number array type
let numArr: number[];

// Sometimes we want to set an array variable equal to an empty array so we can use methods like .push()
// If we try to use the .push() method on an uninitialized variable, you'll get a "cannot read property push of undefined" error

let emptyStrArr: string[] = [];
emptyStrArr.push('Scout');

// ---- Union Types ----
// If we want to create an array with mixed types, we can use a union type

let mixedArr: (string | number | boolean)[] = [];
mixedArr.push('Kuvra');
mixedArr.push(44);
mixedArr.push(true);
console.log(mixedArr);

// Union types can also be used on normal variables
// For instance if we were using a uuid which could be a number or a string
// We don't need to add parenthese if the union is not in front of an array

let uuid: string | number;
uuid = '123';
uuid = 123;

// ---- Object Types ----
// We can ensure that a variable is set to an object type by doing this
let object: object;

// Won't work because a string is not an object
// object = ''; // Type 'string' is not assignable to type 'object'.

// This will technically work since in JS, an array is considered to be an object...
// object = [];

// We can be even more specific when it comes to objects and specify the property types as well
let typedObject: { color: string; nickName: string; isOffline: boolean; population: number };

typedObject = {
  color: 'yellow',
  nickName: 'Stevo',
  isOffline: false,
  population: 123
};
