import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Invoice implements HasFormatter {
  constructor(readonly client: string, private details: string, public amount: number) {}

  // HasFormatter works for this, it returns string
  // if we don't have this, the class Invoice will error
  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
