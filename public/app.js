"use strict";
// classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    // 2. we can still access it in here -- [PRIVATE]
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const invoiceOne = new Invoice("Mario", "Bakery", 200);
const invoiceTwo = new Invoice("Thomas", "Soda", 50);
const invoiceThree = new Invoice("Diesel", "Fuel", 450);
let invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
invoices.push(invoiceThree);
// but we can't access the details in here -- [PRIVATE]
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
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
