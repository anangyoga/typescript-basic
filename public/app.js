"use strict";
// classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const invoiceOne = new Invoice("Mario", "Bakery", 200);
const invoiceTwo = new Invoice("Thomas", "Soda", 50);
let invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
console.log(invoices);
const form = document.querySelector(".new-item-form");
// inputs
// it uses HTMLSelectElement because it is select field
const type = document.querySelector("#type");
// it uses HTMLSelectElement because it is input element
const toForm = document.querySelector("#tofrom");
// it uses HTMLSelectElement because it is input element
const details = document.querySelector("#details");
// it uses HTMLSelectElement because it is input element
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, toForm.value, details.value, amount.valueAsNumber);
});
