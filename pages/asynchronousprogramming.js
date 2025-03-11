// // let data
// // function fetchData(cb){
// //     setTimeout(() => {const data ={name:"john",age:30}
// // cb(data);},2000)
// // }
// // function a(data){
// //     console.log(data)
// // }
// // fetchData(a)
// // console.log()
// function orderPizza(cb){
//     setTimeout(() => {console.log("step1, ordered");cb()},4000)
// }
// function prepairingPizza(cb){
//     setTimeout(() => {console.log("Pizza is being prepaired!");cb()},3000)
// }
//     function served(){
//     setTimeout(() => {console.log("Pizza is served!")},1000)
// }
// const prepare=() => prepare(servepizza)
// orderPizza()
// prepairingPizza()
// served()
const callback = (resolve,reject)=> {
    setTimeout(() => {
        const success = true
        if(success){
            resolve("success");
        }
        else{
            reject("failure");
        }
    }, 2000);
}
const promise = new Promise(callback)
console.log(promise)
promise
.then((m)=> console.log(m))
.catch((e)=> console.error(e))