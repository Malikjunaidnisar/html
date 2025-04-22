"use strict";
function getProperty(obj, key) {
    return obj[key];
}
let x = {
    a: 1,
    b: 'string',
    c: 3,
    d: true
};
getProperty(x, 'a');
function logLength(arg) {
    console.log(arg.length);
}
let a = [1, 2, 1];
let b = {
    length: 28,
};
logLength(b);
