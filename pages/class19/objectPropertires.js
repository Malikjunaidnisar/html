let student ={}
Object.defineProperties(student,
    {'name':{value:'haris',
        writable:true,
        configurable:true,
        enumerable:true
    },
    'fname':{value:'nisar',
        writable:true,
        configurable:true,
        enumerable:true
    }
})
console.log(student)
student.name='junaid'
console.log(student)
const student1={}
Object.defineProperty(student1,'name',{
    value:'malik',
    writable:true,
    enumerable:true,
    configurable:true
})
console.log(student1)
const person ={
    name:'junaid',
    fName:'malik'
}
// Object.defineProperty(person)    
person.name='haris'
// console.log(person)