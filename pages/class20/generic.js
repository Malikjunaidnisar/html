"use strict";
function identity(arg) {
    return arg;
}
let arg1 = identity('me');
console.log(arg1);
function firstElement(arg) {
    return arg[0];
}
const c = firstElement([1, 2, 3, 4]);
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
let h = {
    name: 'malik',
    age: 28
};
let j = {
    street: '1',
    city: 'khi'
};
let o = merge(h, j);
// console.log(o)
