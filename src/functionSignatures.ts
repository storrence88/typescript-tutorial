// ===================
// Function Signatures
// ===================

// In typescript, we can explicitly set a variable to a type of Function but we can also take this
// a step further and explicitly set the types of the function parameters and the return type of the function

// Example 1
let greetings: (x: string, y: string) => void;

greetings = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}!`);
};

console.log(greetings('Steve', 'Hello'));

// Example 2
let calc: (a: number, b: number, c: string) => number;

calc = (num1: number, num2: number, action: string): number => {
  if (action === 'add') {
    return num1 + num2;
  } else {
    return num1 - num2;
  }
};

// Example 3
let logDetail: (obj: { name: string; age: number }) => void;

type person = { name: string; age: number };

logDetail = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old.`);
};

console.log(logDetail({ name: 'Scout', age: 10 }));
