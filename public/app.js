import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice("Domo", "Backlink Work", 400);
// docTwo = new Payment("Luigi", "Plumbing Work", 300);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const toForm = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(toForm.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toForm.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
    toForm.value = "";
    details.value = "";
    amount.value = "";
});
