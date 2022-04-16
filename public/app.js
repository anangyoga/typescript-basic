"use strict";
// Generics
// It allows you to create reusable block of code that can be used with different types
// T will chapture whatever item we pass to the function
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: "Tim", age: 20 });
console.log(docOne.age);
// T extends object, whatever we pass must be an object
const addUIDnum2 = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docTwo = addUIDnum2({ name: "Tim", age: 20 });
console.log(docTwo);
const docThree = {
    uid: 1,
    resourceName: "data",
    // this part should be a string because the T is now string as we declared
    data: "the data is lorem ipsum",
};
const docFour = {
    uid: 1,
    resourceName: "person",
    // this part should be object because the T is now object as we declared
    data: { name: "TIm" },
};
const docFive = {
    uid: 1,
    resourceName: "shoppinglist",
    // this part should be object because the T is now object as we declared
    data: ["pear", "strawberry", "pineapple"],
};
