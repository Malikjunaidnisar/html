function getProperty<Type,Key extends keyof Type>(obj:Type,key:Key){
    return obj[key]
}
let x ={
    a:1,
    b:'string',
    c:3,
    d:true
}
getProperty(x,'a')
interface Lengthwise{
    length:number
}
function logLength<T extends Lengthwise>(arg:T):void{
    console.log(arg.length)
}
let a=[1,2,1]
let b ={
    length:28,
}
logLength(b)


