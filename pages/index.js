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
//console.log(product)
let ran=Math.floor(Math.random()*500+500)
//console.log(ran)
let j=2
let r=3
let q=j
//console.log(q)
j=r
//console.log(j)
 r=q
//console.log(r)  
//console.log(j,r)
//console.log(typeof j) //use typeof to check type of variable
//let personA=number("28")
//console.log(personA)
let personB=36
personC=personB.toString()
//console.log(typeof personC) //change data type to string
let firstName="person"
let lastName="nisar"
//let fullName1=firstName+lastName
//console.log(fullName1)
let fullName2=`${firstName} ${lastName}`
//console.log(fullName2)
const restaurant={
    name:"Ichiran Ramen",
    address:`${Math.floor(Math.random() *100)+1} Johnson Ave`,
    city:"Brooklyn",
    state:"NY",
    zip:"11215",
}
//console.log(restaurant)
let fullAdress=`${restaurant.address},${restaurant.city},${restaurant.state},${restaurant.zip}`
//console.log(fullAdress)
//console.log(restaurant.address)

ap=Number("28")  // to convert string value to number
//console.log(typeof ap) //check datatype of your variables
let student={
    name:'malik',
    age:29,
    subjects:['english','math','urdu'],
    isEnrolled:true
}
//console.log(student.name,student.age,student.subjects,student.isEnrolled)
student.grade="A" //use obj.key=yourvalue to add new keyvalue pair
student.isEnrolled=false //use obj.key=yourvalue to modify new keyvalue pair
student['priority']=true
delete student.priority //delete a value use delete objname.key
//console.log(student)
let myAge=28
//if(myAge>28){
  //  console.log("your age is greater than 28")
//}else{
//    console.log("your age is not less than 28")
//}
login=false
pro=false
//if(login==false){
  //  console.log("log in first to see the data")
//}else{
  //  if(pro==true){
   // console.log("thankwelcome to the system")
   // }else{
   // console.log("log in first to see the data")
//}
///}
user=true
pro=false
if(!user){
    console.log("pls login first")
}
if(user && pro){
    console.log("thankyou to the system")
}
if(user && !pro){
    console.log("pls subscribe")
}