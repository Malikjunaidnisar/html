fullname="junaid"
age=28
Age=28.3
Pakistani=true
isnational=null
abc="" //primitive data type

Object1={
    fullname:"junaid",
    age:28,
    Age:2.0,
    Pakistani:true,
    isnational:null,
    name:"malik"
} //non-primitive data type object data type
Object2=Object1
Object1.age=29
arr=[1,2,3.5] //non-primitive data type array data type
arr1=arr
arr[3]=12345798
{
    const fname=50
//console.log(fname)
}
//console.log(Object.age,Object.fullname,Pakistani,arr[2])
//console.log(arr)
//console.log(arr1)
//console.log(Object1)
//console.log(Object2)
var a = 1+2 // math operator for addition
var b=5-10  // math operator for subtraction
var c=8*3 // math operator for multiplying
var d =9/3 // math operator for division
var e=4%3 // math operator for modulus(reminder: division)
var f=2**5 // math operator for exponentiation(power of any number)
//console.log(a,b,c,d,e,f)
let fruits=['apple','orange']
//console.log(fruits)
//fruits.push('mango') //add a new item to the list in the last
//console.log(fruits)
//fruits.unshift('strawberry') //add a new item to the list in the first place shift all element side
//console.log(fruits)
//fruits[4]="banana" //add a new item to the list in the position using index notation
//console.log(fruits)
//last=fruits.pop() //remove the last item from the list
//console.log(last)
let fruits1=['mango','hazel']
let fruits3=['junaid']
let nfruits=fruits.concat(fruits1,fruits3) //combine multiple arrays
//console.log(nfruits)
//fr=fruits.includes("banana") //includes shows boolean values{true,false}
//console.log(fr) //shows false value for fr not including in array
//fr1=fruits1.includes("mango")
//console.log(fr1)//shows true value for fr not including in array
//fr2=Array.isArray(fr1)//Array.isArray shows boolean values{true,false}
//console.log(fr2) //shows false value for fr2 is an array
//fr3=Array.isArray(fruits3)//Array.isArray shows boolean values{true,false}
//console.log(fr3) //shows true value for fr3 is an array
//let fr5=nfruits.splice(1,1)
//console.log(fr5) //shows true value for fr5 is
//fruits6=nfruits
//nfruits.push('haris')
//console.log(fruits6)
//console.log(nfruits)
//ob={name: 'haris',name:'junaid'} // cannot make a value with same keyit will always give last key value
//console.log(ob)
product={
    name: "HP Elitebook Sleeve",
    inStock: true,
    price:1000,
    totalUnits:7,
    colors:["black","white","gray"]
    }
console.log(product)
let ran=Math.floor(Math.random()*500+500)
console.log(ran)


