let age:number =18;
let canVote:string=age>=18?"yes":"no"
// console.log(canVote)
function isEven (value:number):boolean {
    let answer=value%2==0? true:false
    return answer
    console.log(answer)
}
// isEven(5)
const colors:string[]=["yellow","green","purple"]
const favColors:string[]=["pink","orange"]
const lightColors:string='white'
const allColor:string[]=[...colors,lightColors,...favColors]
// console.log(allColor)
interface user {
    id:number,
    name:string,
    email:string,
    age:number
}
const User:user={
    id:1,
    name:"malik",
    email:"sayaandtrain@gmail.com",
    age:28
}
// console.log(User)
const newUser:user={
    ...User,
    email:'junaid@',
    age:31,
    // 'f.name':"nisar"
}
// console.log(newUser)

// console.log(usama1)
function sum(a:number,b:number,c:number):number{
    return a+b+c
}
const number1:[number,number,number]=[1,2,3]
// console.log(sum(...number1))
function mergeArrays (arr1:number[],arr2:number[]):number[]{
    let a = [...arr1,...arr2]
        return a
}
const arr1:number[]=[1,2,3]
const arr2:number[]=[4,5,6]
// console.log(mergeArrays(arr1,arr2))
let p1:string[]=["red","blue"]
let p2=p1
p1.push('orange')
// console.log(p1)
// console.log(p2)
function bio(...args:string[]):string[]{
    console.log(args)
    return args
}
// console.log(bio('n','i','s'))
function sum1(...numbers1:number[]):number{
    let sum =0
    numbers1.forEach((num)=>{
        sum += num
    })
    return sum
}
// console.log(sum1(1,2,3,4))
const shoppingart=[
    {name:'malik',price:200},
    {name:"nisar",price:300},
    {name:'haris',price:400},
]
const result = shoppingart.reduce((accumulator:string | number,currentValue)=>{
    return (accumulator += currentValue.name)
},"")

// console.log(result)
// let x ="abc"
// let result3 = x.reduce((accumulator,value)=>{

// },[])
const data={
    name:'malik',
    age:30,
    email:'saya'
}
const userJSON =JSON.stringify(data)
console.log(userJSON)
localStorage.setItem('user',userJSON)
// const str =localStorage.getItem("user")
// console.log(str)