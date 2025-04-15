1.inheritance
2.encapsulation
  1.private
  2.protected
  3.public
3.polymorphism
  1.overriding 
  2.overloading not possible in javascript
4.abstraction
function Product(title,price){
    this.title=title
    this.price=price
    this.showDetails=function (){
        console.log(`${this.title} is RS.${this.price}`)
    }
}

const product1 = new Product('Laptop',5000)
const product2 = new Product('Headphone',2500)

console.log('product1',product1)
product2.showDetails()
// import hi,{pi} from './es6.js'
// hi()
// console.log(pi)
class Animal{
    constructor(name,sound){
        this.name=name,
        this.sound=sound
    }
    speak(){
        console.log(`${this.name} says ${this.sound}`)
    }
}
const dog = new Animal('Dog','woof')
dog.speak()
const cat =new Animal('Cat','Meow')
cat.speak()
class student{
    constructor(name,email){
        this.name=name,
        console.log(this)
    }
}
const st =new student('ali')
console.log('student',st)