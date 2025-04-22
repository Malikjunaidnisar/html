function identity<T>(arg:T):T{
    return arg

}
let arg1=identity('me')
console.log(arg1)
function firstElement<t>(arg:t[]):t{
    return arg[0]
    
}
const c=firstElement([1,2,3,4])
// console.log(c)
interface Person{
    name:string,
    age:number
}
interface Address{
    street:string,
    city:string
}
type PersonAndAdress=Person & Address

function merge<p extends Person,t extends Address>(obj1:Person,obj2:Address):PersonAndAdress{
    return {...obj1,...obj2}

}
let h={
    name:'malik',
    age:28
}
let j={
    street:'1',
    city:'khi'
}
let o = merge(h,j)
// console.log(o)
