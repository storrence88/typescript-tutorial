"use strict";
// ================
// DOM Manipulation
// ================
var anchor = document.querySelector('a');
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
console.log(anchor === null || anchor === void 0 ? void 0 : anchor.href);
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
var form = document.querySelector('.new-item-form');
console.log(form.children);
// Form Inputs
var type = document.querySelector('#type');
var toFrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log("Type: " + type.value);
    console.log("toFrom: " + toFrom.value);
    console.log("Details: " + details.value);
    console.log("Amount: " + amount.valueAsNumber);
});
