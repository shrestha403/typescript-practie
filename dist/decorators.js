"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logClassName(target) {
    console.log(target.constructor.name);
}
let MyClass = class MyClass {
    constructor() { }
};
MyClass = __decorate([
    logClassName
], MyClass);
const myObject = new MyClass();
function first() {
    console.log("first(): factory evaluated");
    return function (target, propertyKey, descriptor) {
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
        console.log("first(): called");
    };
}
function second() {
    console.log("second(): factory evaluated");
    return function (target, propertyKey, descriptor) {
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
        console.log("second(): called");
    };
}
class ExampleClass {
    method() { }
}
__decorate([
    first(),
    second()
], ExampleClass.prototype, "method", null);
//# sourceMappingURL=decorators.js.map