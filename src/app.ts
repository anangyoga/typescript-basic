// classes
class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
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

let invoices: Invoice[] = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);

console.log(invoices);

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
// it uses HTMLSelectElement because it is select field
const type = document.querySelector("#type") as HTMLSelectElement;

// it uses HTMLSelectElement because it is input element
const toForm = document.querySelector("#tofrom") as HTMLInputElement;

// it uses HTMLSelectElement because it is input element
const details = document.querySelector("#details") as HTMLInputElement;

// it uses HTMLSelectElement because it is input element
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value, toForm.value, details.value, amount.valueAsNumber);
});
