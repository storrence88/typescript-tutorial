// ==============
// Function Types
// ==============

// Just like our other variables, we can declare a Function (with a capital F) type
let greet: Function;

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
const add = (a: number, b: number, c: number | string = 20) => {
  console.log(a + b);
  console.log(c);
};

add(5, 10);

// ----- Function Return Type and Void -----
// We can explicitly set a function to return a certain type
const minus = (a: number, b: number): number => {
  return a - b;
};

let result = minus(10, 7);

// If a function doesn't return anything, we can set its type to void
const multiply = (a: number, b: number): void => {
  console.log(a * b);
};

// ============
// Type Aliases
// ============

// Sometimes declaring types explicitly can get a little verbose
// const logDetails = (uuid: string | number, item: string) => {
//   console.log(`${item} has a uuid of ${uuid}`);
// };

// or even with an object
// const greeter = (user: { name: string; uuid: string | number }) => {
//   console.log(`${user.name} says hello!`);
// };

// We can set up aliases for the types and use them in our code
type StrOrNum = string | number;
type ObjWithName = { name: string; uid: StrOrNum };

const logDetails = (uuid: StrOrNum, item: string) => {
  console.log(`${item} has a uuid of ${uuid}`);
};

const greeter = (user: ObjWithName) => {
  console.log(`${user.name} says hello!`);
};
