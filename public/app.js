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
// =====================
// Classes in Typescript
// =====================
var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details + ".";
    };
    return Invoice;
}());
var invoice1 = new Invoice('Steve', 'Work on website', 200);
var invoice2 = new Invoice('Kuvra', 'Work on lunch', 300);
console.log(invoice1, invoice2);
// If we wanted to collect all of our invoices into an array,
// we can ensure that only Invoice class objects are allowed in the array
var invoices = [];
// This will not work because we are pushing a string into the invoices array
// invoices.push('hello'); // Argument of type 'string' is not assignable to parameter of type 'Invoice'.
var invoice3 = new Invoice('Scout', 'Work on lunch', 150);
invoices.push(invoice1);
invoices.push(invoice2);
invoices.push(invoice3);
console.log(invoices);
// If we decide to change the values in the object later, our established types still hold true
invoice1.client = 'Mere';
invoice2.amount = 500;
console.log(invoices);
