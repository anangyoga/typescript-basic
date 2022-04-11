// Typescript uses strict type and Js not. Once we declare variable as string, it will always be a string.

// We CAN change the value of variable, but we CAN'T change the type.

let character = "Mario";
let myAge = 30;
let isBlackBelt = false;

character = "luigi";

const circ = (diameter: number) => {
  return diameter * Math.PI;
};

console.log(myAge);
console.log(isBlackBelt);
console.log(circ(9));

// ================ Array =============

let people = ["ji", "ro", "lu"];
people.push("pat");

// if we have only string array, it won't accept another type of data such as number below (there's warning under the 5)
people.push(5);

// Mixed Array
let mixedArray = ["see", "saw", true, "sheen", 56];

// these are okay since we have mixed array
mixedArray.push(5);
mixedArray.push(false);
mixedArray.push("shaun");

// ================ Object =============
let ninja = {
  name: "Luigi",
  belt: "black",
  age: 24,
};

// it's okay to update the object based on the type of value, i.e string to string and number to number. but it's nokay to update the object of number to array or vice versa
ninja.age = 40;
ninja.name = "Mario";

// WE CAN'T EVEN ADD NEW PROPERTY that's not exist in the object
// there will be red-worm under the skills
ninja.skills = ["kick", "run", "code"];

// we can't override an object to be an array, for example. but we can update the value of object for sure

ninja = {
  name: "tim",
  belt: "white",
  age: 17,
};

// but, if we have to update the property of objects, we have to update it to match the initial structure of the previous object, we CANT add or remove properties. We can still change the value of objects, but we can't change the structure of it

// ================ Explicit Types =============

// == explicit types ==
let hisName: string;
let phone: number;
let isMarried: boolean;

hisName = "Tom";
phone = 989898;
isMarried = true;

// == arrays ==
let ninjas: string[];
ninjas = ["tim", "tom", "tem"];

// it shows error because we push a number
ninjas.push(4);
// this one works
ninjas.push("jim");

// == Union Types ==
let mixed: (string | number | boolean)[] = [];
mixed.push("Jen");
mixed.push(30);
mixed.push(false);

let uid: string | number;
uid = 30;
uid = "Thomas";

// == Objects Types ==
let footballTeam: object;
footballTeam = {
  name: "Chelsea",
  thropy: 30,
  championsWinner: true,
};

// another way to declare object with specific structure. it used in react to create props interface
let myTeam: {
  name: string;
  winner: boolean;
  thropy: number;
};

// it will show an error if we add or remove one of the properties
myTeam = {
  name: "Norwich",
  winner: false,
  thropy: 1,
};

// ================ Dynamic (any) Types =============
let age: any;

// these work because the type is any
age = 25;
console.log(age);
age = true;
console.log(age);

// any array
let arrayOfMix: any[] = [];
arrayOfMix.push("Hei");
arrayOfMix.push(true);
arrayOfMix.push(30);
console.log(arrayOfMix);

// any object
let livery: { name: any; thropy: any };
livery = {
  name: "Marcedes",
  thropy: 21,
};
console.log(livery);
