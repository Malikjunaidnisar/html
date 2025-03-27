"use strict";
let age = 18;
let canVote = age >= 18 ? "yes" : "no";
// console.log(canVote)
function isEven(value) {
    let answer = value % 2 == 0 ? true : false;
    return answer;
    console.log(answer);
}
// isEven(5)
const colors = ["yellow", "green", "purple"];
const favColors = ["pink", "orange"];
const lightColors = 'white';
const allColor = [...colors, lightColors, ...favColors];
const User = {
    id: 1,
    name: "malik",
    email: "sayaandtrain@gmail.com",
    age: 28
};
// console.log(User)
const newUser = Object.assign(Object.assign({}, User), { email: 'junaid@', age: 31 });
// console.log(newUser)
// console.log(usama1)
function sum(a, b, c) {
    return a + b + c;
}
const number1 = [1, 2, 3];
// console.log(sum(...number1))
function mergeArrays(arr1, arr2) {
    let a = [...arr1, ...arr2];
    return a;
}
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// console.log(mergeArrays(arr1,arr2))
let p1 = ["red", "blue"];
let p2 = p1;
p1.push('orange');
// console.log(p1)
// console.log(p2)
function bio(...args) {
    console.log(args);
    return args;
}
// console.log(bio('n','i','s'))
function sum1(...numbers1) {
    let sum = 0;
    numbers1.forEach((num) => {
        sum += num;
    });
    return sum;
}
// console.log(sum1(1,2,3,4))
const shoppingart = [
    { name: 'malik', price: 200 },
    { name: "nisar", price: 300 },
    { name: 'haris', price: 400 },
];
const result = shoppingart.reduce((accumulator, currentValue) => {
    return (accumulator += currentValue.name);
}, "");
// console.log(result)
let x ="abc"
let result3 = x.reduce((accumulator,value)=>{
    for (i=0;i < x.length;i++){
        console.log(1)
    }
   
},0)
console.log(result3)
// const data = {
//     name: 'malik',
//     age: 30,
//     email: 'saya'
// };
// const userJSON = JSON.stringify(data);
// console.log(userJSON);
// localStorage.setItem('user', userJSON);
// const str =localStorage.getItem("user")
// console.log(str)
