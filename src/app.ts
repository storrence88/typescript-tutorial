import { Invoice } from './classes/Invoice.js';
import { Person } from './classes/Person.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter';

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new Payment('mario', 'plumbing', 350);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docOne);
// console.log(docTwo);

// ================
// DOM Manipulation
// ================

const anchor = document.querySelector('a');

// We get a warning when doing this because it's possible the anchor object is null
// In that case, we wouldn't be able to call .href on it
// console.log(anchor.href); // Object is possibly 'null'.

// To combat this, we can add an exclamation point to the end of the variable declaration
// if we know FOR SURE that it will never return null or undefined

// We can also use a condition to check and see if anchor exists
if (anchor) {
  console.log(anchor.href);
}

// Or we can use optional chaining to safely navigate the anchor object
console.log(anchor?.href);

// ===========
// Typecasting
// ===========

// ----- Grabbing the form element -----
// The variable form has a type of HTMLFormElement
// const form = document.querySelector('form');

// However, if we had more than one form we could select it using its class name
// This changes the type to Element because a class can belong to any element
// TS doesn't know for sure if it's a form element
// To solve this issue, we can use Typecasting to tell TS it is a form element
const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// Form Inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (event: Event) => {
  event.preventDefault();

  let doc: HasFormatter;

  if (type.value === 'invoice') {
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
  }

  console.log(doc);
});

// =====================
// Classes in Typescript
// =====================
const invoice1 = new Invoice('Steve', 'Work on website', 200);
const invoice2 = new Invoice('Kuvra', 'Work on lunch', 300);

console.log(invoice1, invoice2);

// If we wanted to collect all of our invoices into an array,
// we can ensure that only Invoice class objects are allowed in the array

let invoices: Invoice[] = [];

// This will not work because we are pushing a string into the invoices array
// invoices.push('hello'); // Argument of type 'string' is not assignable to parameter of type 'Invoice'.

const invoice3 = new Invoice('Scout', 'Work on lunch', 150);
invoices.push(invoice1);
invoices.push(invoice2);
invoices.push(invoice3);
console.log(invoices);

// If we decide to change the values in the object later, our established types still hold true
// invoice1.client = 'Mere';
invoice2.amount = 500;

console.log(invoices);

//
// Public, Private, and Readonly Class Modifiers
//

const steve = new Person('Steve', 'Torrence', 31, true);

// If we try to call the private method fullName() outside of the class, we get an error
// It can only be used inside of the class, like inside of the format() method
// console.log(steve.fullName()); // Property 'fullName' is private and only accessible within class 'Person'.

console.log(steve.format());

// ==========
// Interfaces
// ==========

// Interfaces are similar to classes but one major difference being we don't use Interfaces
// to create new objects

// We use interfaces to determine the structure of already existing objects

interface isDog {
  name: string;
  age: number;
  speak(text: string): void;
  count(num: number): number;
}

// So now if we create an object that is of type isDog, it must have those properties and those methods
const scout: isDog = {
  name: 'Scout',
  age: 8,
  speak(text: string): void {
    console.log(text);
  },
  count(number: number): number {
    return number;
  }
};

scout.speak('Woof!');

// We can have multiple different types of isDog objects
// We can also ensure that only a certain type of object gets passed into methods

const greetDog = (dog: isDog) => {
  console.log('Hello', dog.name);
};

greetDog(scout);
