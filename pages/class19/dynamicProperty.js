// let key ='dynamickey'
// let value='new'
// let obj ={
//     [key]:value
// }
// console.log(obj.dynamickey)
let userInputs=[
    {key:'username',value:'johndoe'},
    {key:'email',value:'john@example.com'},
    {key:'password',value:'12345'}
]
let obj1={}
for (let i =0;i <userInputs.length;i++ ){
    let key = userInputs[i].key
    let value=userInputs[i].value
    obj1[key]=value
}
// console.log(obj1)
let obj2 ={}
for (const {key,value} of userInputs){
    obj2[key]=value
}
console.log(obj2)