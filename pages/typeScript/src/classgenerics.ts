class GenericClass<T>{
    value:T
    constructor(value:T){
        this.value=value
    }
    getValue():T{
        return this.value
    }
}
let ins1=new GenericClass('abc')
console.log(ins1.getValue())
let ins2=new GenericClass(123)
console.log(ins2)