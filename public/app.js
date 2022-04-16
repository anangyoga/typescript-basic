"use strict";
// Enums
// a way to specify descriptive constant and associate each one with numeric value behind the scene (on the console)
// Enums is zero-based just like index
var resourceType;
(function (resourceType) {
    resourceType[resourceType["BOOK"] = 0] = "BOOK";
    resourceType[resourceType["AUTHOR"] = 1] = "AUTHOR";
    resourceType[resourceType["FILM"] = 2] = "FILM";
    resourceType[resourceType["DIRECTOR"] = 3] = "DIRECTOR";
    resourceType[resourceType["PERSON"] = 4] = "PERSON";
})(resourceType || (resourceType = {}));
const docOne = {
    uid: 23,
    //this one, we don't need to remember the index/number of certain constant
    resourceType: resourceType.AUTHOR,
    data: { name: "Jonas Jonasson" },
};
const docTwo = {
    uid: 19,
    // and this one, we still use number/index to associate constant
    resourceType: 4,
    data: { name: "Gillian" },
};
console.log(docOne, docTwo);
