"use strict";
const anchor = document.querySelector("a");
console.log(anchor === null || anchor === void 0 ? void 0 : anchor.href);
// if we are so sure that there's a tag in the file, we can add ! at the back
// const anchor = document.querySelector("a")!
// this is how we shot the form element, because it has only 1 form then we can directly get it with querySelector and then add !
const form = document.querySelector("form");
// ========== Type Casting ==========
// if there are more than 1 forms, we shot it with its classes
// when we pass class, we need to declare the type casting
const formAgain = document.querySelector(".new-item-form");
console.log(formAgain.children);
// inputs
// it uses HTMLSelectElement because it is select field
const type = document.querySelector("#type");
// it uses HTMLSelectElement because it is input element
const toForm = document.querySelector("#tofrom");
// it uses HTMLSelectElement because it is input element
const details = document.querySelector("#details");
// it uses HTMLSelectElement because it is input element
const amount = document.querySelector("#amount");
formAgain.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, toForm.value, details.value, amount.valueAsNumber);
});
