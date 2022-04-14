import { Invoice } from "./classes/invoice.js"; // remember the extension is .JS

const invoiceOne = new Invoice("Mario", "Bakery", 200);
const invoiceTwo = new Invoice("Thomas", "Soda", 50);
const invoiceThree = new Invoice("Diesel", "Fuel", 450);

let invoices: Invoice[] = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
invoices.push(invoiceThree);

invoices.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format());
});

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const toForm = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value, toForm.value, details.value, amount.valueAsNumber);
});
