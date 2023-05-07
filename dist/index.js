"use strict";
let a;
a = 10;
a = "number";
console.log(a);
let b = 10;
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
let numbers = [];
let datas = [1, 2, 3.3];
datas.forEach(n => {
    n.toFixed(2);
});
let fxarr = [1, "string"];
;
;
let mySize = "m";
console.log(mySize);
function calculateTax(income, year = 2022) {
    if (year == 2022)
        return income * 1.3;
    return income * 1.2;
}
console.log(calculateTax(50000, 2018));
console.log(calculateTax(50000, 2022));
console.log(calculateTax(50000));
let user = {
    id: 1,
    name: "jagadish",
    password: "123"
};
user.name = "shrestha";
let user1 = {
    id: 1,
    name: "jagadish",
    password: "Abc",
    images: "www.images.com"
};
function kmtom(value) {
    if (typeof value === "number")
        return value * 1000;
    else
        return parseInt(value) * 1000;
}
console.log(kmtom(5));
console.log(kmtom("6"));
let newElement = {
    drag: () => { },
    element: () => { }
};
let myQuantity = 500;
function printName(name) {
    if (name) {
        console.log(name);
    }
    else {
        console.log("invalid");
    }
}
printName("jagadish");
printName(null);
printName(undefined);
console.log(user === null || user === void 0 ? void 0 : user.images);
const person = { name: 'Alice', age: 30 };
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
function keepProcessing() {
    while (true) {
        console.log('I always does something and never ends.');
    }
}
function adding(a, d) {
    return a + d;
}
console.log(adding(50, 60));
console.log(adding("jagadihs", "shrestha"));
//# sourceMappingURL=index.js.map