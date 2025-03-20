"use strict";
// console.log("hello world!");
// let a:string="hello world";
// let b:number=2
// let c:(string | number)=a+b
// let arr:number[] =[1,2,3,4]
// for(let item of arr){
//     console.log(item);
// }
// let arr1:Array<number> =[1,2,3,4]
// console.log(arr1)
// let employee:[number,string]=[1,"juniad"]
// console.log(arr1)
// let data:{
//     id:number,
//     name:string
// }={
//     id:1,
//     name:"malik"
// }
// interface Employee{
//     id:Number,
//     name:string
// }
// let employee1:Employee={
//     id:1,
//     name:"junaid"
const outPut = (input) => {
    if (typeof input == 'string') {
        return input.toLowerCase();
    }
    else {
        let a = 0;
        for (let i = 0; i < input.length; i++) {
            a = a + input[i];
        }
        return a;
    }
};
console.log(outPut("MALIK"));
