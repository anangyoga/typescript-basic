"use strict";
let greet;
greet = () => {
    console.log("hi");
};
const add = (a, b, c) => {
    console.log(a + b);
};
add(15, 5);
// when we need an optional parameter, we can add ? just like the example above
// the optional parameter always at the end of the required-params
// other than ? to mark as an optional, we can add the default value such as c: number | string = 10, that way we don't need to add ? to mark optional parameter. but if you declare the value of the third value, it will override the default value
// function with explicit return, we declare it as number so when it's reassign to string value, it won't work
const minus = (a, b) => {
    return a + b;
};
