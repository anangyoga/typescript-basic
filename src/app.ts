// Tuples
// It's like array, we use curly-bracket to define and it uses array method too. But there's major difference, types of data in each position in Tuple is fixed once it's being initialized

// array
let arrayOfTuple = ["ryu", 25, true];
arrayOfTuple[1] = false;
arrayOfTuple[2] = "ken";
arrayOfTuple = [50, "Blink182", false];
console.log(arrayOfTuple);

// this is how we define tupple
let tup: [string, number, boolean] = ["ryu", 25, true];
tup[0] = "ken"; // this is okay
tup[1] = true; // this is NOKAY

let student: [string, number];
student = ["chun li", 23232];
