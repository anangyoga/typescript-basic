"use strict";
const me = {
    name: "Anang",
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(`I spent ${amount}`);
        // kalo function tipe-nya BUKAN any dan void, HARUS return value
        // makannya ini harus ada return
        return amount;
    },
};
// we can use the object as argument in a function
const greetPerson = (person) => {
    console.log(`Hi ${person.name}`);
};
// greetPerson({ name: "Shelby" }); THIS WONT WORK
// greetPerson(me);
