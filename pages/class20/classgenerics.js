"use strict";
class GenericClass {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
let ins1 = new GenericClass('abc');
console.log(ins1.getValue());
let ins2 = new GenericClass(123);
console.log(ins2);
