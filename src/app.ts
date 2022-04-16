// Generics
// It allows you to create reusable block of code that can be used with different types

// T will chapture whatever item we pass to the function
const addUID = <T>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docOne = addUID({ name: "Tim", age: 20 });
console.log(docOne.age);

// T extends object, whatever we pass must be an object
const addUIDnum2 = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docTwo = addUIDnum2({ name: "Tim", age: 20 });
console.log(docTwo);

// Generics with Interfaces
interface Resources<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const docThree: Resources<string> = {
  uid: 1,
  resourceName: "data",
  // this part should be a string because the T is now string as we declared
  data: "the data is lorem ipsum",
};

const docFour: Resources<object> = {
  uid: 1,
  resourceName: "person",
  // this part should be object because the T is now object as we declared
  data: { name: "TIm" },
};

const docFive: Resources<string[]> = {
  uid: 1,
  resourceName: "shoppinglist",
  // this part should be object because the T is now object as we declared
  data: ["pear", "strawberry", "pineapple"],
};
