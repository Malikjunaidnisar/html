const str ='I_am learning JavaScript,We can build web app using Javascript'
const pattern =/JavaScript/gi
const result =pattern.test(str)
// console.log(result)
const re = str.replace(pattern,"python")
// console.log(re)
// let a = str.replaceAll(pattern,"python")
// console.log(a)
const an ="I am learning JavaScript,We can build web app using Javascript"
const regex =/\b(a|an|the)\b/gi
const re1=regex.test(regex)
// console.log(re1)
const pattern1=/\b[aeiou]\b/gi
const pattern2=/\w{5,}/gi
function spinalCase(str){
    const pattern3=/[\s\_]/gi
    const newString=str.replace(pattern3,"-")
    newString1=newString.toLowerCase()
    console.log(newString1)
}
// spinalCase(str)
function rec(num){
    if (num ==0){
        return;
    }
   
   rec(num-1)
   console.log(num)
    
}

// rec(10)
function factor(num){
    if(num == 0){
        return
    }
    d =num*factor(num-1)
    console.log(d)

    
}
factor(4)
let i=0
function ad(){
    return ()=>{
        i++
        console.log(i)
    }
}
let b=ad()
// b()
// b()
function createGreeting(greeting){
    return function(name){
        return`${greeting} ${name}`
    }
}
const sayHI=createGreeting('HI')
const sayHello =createGreeting('hello')
const result0=sayHI('shariq')
const result1=sayHello('hamza')
// console.log(result0)
// console.log(result1)
function mu(num){
    return(num1)=>{
        return num*num1
    }
}
const num3 =mu(2)
const num4 =mu(3)
const r =num3(5)
const r1=num4(5)
// console.log(r)
// console.log(r1)
