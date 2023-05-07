"use strict";
function concat(a, b) {
    return `${a}${b}`;
}
console.log(concat(10, 20));
console.log(concat(null, undefined));
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
console.log(loggingIdentity([]));
function identity(arg) {
    return arg;
}
function filter(arr, func) {
    return arr.filter(func);
}
const myArray = [1, 2, 3, 4, 5];
const filteredArray = filter(myArray, (item) => item > 2);
console.log(filteredArray);
function updateUser(user) {
    console.log(user);
}
updateUser({ name: "jagadish" });
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    getData() {
        return this.data;
    }
}
let stringStorage = new DataStorage();
stringStorage.addItem("ok");
stringStorage.addItem("not ok");
let numberDataStorage = new DataStorage();
numberDataStorage.addItem(1);
numberDataStorage.addItem(2);
console.log(stringStorage);
console.log(numberDataStorage);
//# sourceMappingURL=genric.js.map