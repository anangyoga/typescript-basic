export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    // HasFormatter works for this, it returns string
    // if we don't have this, the class Invoice will error
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
