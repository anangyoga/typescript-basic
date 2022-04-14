import { Invoice } from "./classes/invoice.js"; // remember the extension is .JS
const invoiceOne = new Invoice("Mario", "Bakery", 200);
const invoiceTwo = new Invoice("Thomas", "Soda", 50);
const invoiceThree = new Invoice("Diesel", "Fuel", 450);
let invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
invoices.push(invoiceThree);
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const toForm = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, toForm.value, details.value, amount.valueAsNumber);
});
