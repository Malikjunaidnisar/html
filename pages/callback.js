function greet(name,callback){
    console.log(name);
    callback();
}
function sayGoodBye(){
    console.log("Goodbye");
}
greet("John",sayGoodBye);

function addNumbers(a,b){
    c = a+b;
    return c;
}
function calculate(a,b,callback){
    callback(a,b);
    console.log(c);
}

calculate(5,10,addNumbers);
const hof= ()=>{
    let init =0;
    return ()=>{
        console.log(++init);
    }
}
const i =hof()
i()
i()
i()
arr=[1,2,3,4,5]
let double = (number) => number *2
let doubledArr = arr.map(double)
console.log(doubledArr)
const students = [
    {name: "John", age: 18},
    {name: "Alice", age: 20},
    {name: "Bob", age: 19}
]
let as =(student)=>{
    return student.name+student.age

}
let asArr = students.map(as)
console.log(asArr)
// console.log(users.map((student) =>student.name+student.age))