// interfaces
// it allows us to enforce a certain structure of the class or object, we can use it to describe what properties what method and what type of those properties and return types of those methods are.
interface IsPerson {
  name: string;
  age?: number; // ? means optional
  speak(a: string): void;
  spend(n: number): number;
}

const me: IsPerson = {
  name: "Anang",
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log(`I spent ${amount}`);
    // kalo function tipe-nya BUKAN any dan void, HARUS return value
    // makannya ini harus ada return
    return amount;
  },
};

// we can use the object as argument in a function
const greetPerson = (person: IsPerson) => {
  console.log(`Hi ${person.name}`);
};

// greetPerson({ name: "Shelby" }); THIS WONT WORK
// greetPerson(me);
