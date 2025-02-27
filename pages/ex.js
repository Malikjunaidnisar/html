// let day = "monday" ;
// switch (true) {
//     case day == "sunday" || day== "saturday":
//        console.log("wake up at 10am")
//        break;
//     case day == "monday":
//         console.log("wake up at 8am");
//         break;
//     case day =="tuesday":
//         console.log("wake up at 9am");
//         break;
//     case day == "wednesday":
//         console.log("wake up at 9am");
//         break;
//     case day =="thursday":
//         console.log("wake uo at 9:30am");
//     case day == "friday":
//         console.log("wake up at 8:30am")
//     default:
//         console.log("this is not weekday")

// } 
// let a = ["rock","paper","scissor"]
// for (b=0;b<=2;b=b+1){
//     console.log(a[b])
// }
// let a = ["rock","paper","scissor"]
// for (b=0;b<a.length;b=b+1){
//     console.log(a[b])
// }
// let a = ["rock","paper","scissor"];
// let b =0;
//     while(b<a.length){
//         console.log(a[b]);
//         b=b+1;
// //     }
// library = [{title:"subjects",author:"m.j",yearPublished: 2004}]
// library[1]={newbook:"system design"}
// console.log(library)
// for (let i=0; i<library.length; i++) {
//     if (library[i].newbook=="system design"){ 
//     console.log(library[i])
//     }
// }
// library[0].yearPublished = new Date
// console.log(library)
// let a= "Firstline\nSecondline\tTabbed"
// console.log(a)
// let b = "c:\\User\\Name\\Documents"
// console.log(b)
// let a = "sayaandtrain1@gmail.com";
// let b = a.slice(a.indexOf("@"));
// let c = a.slice(0,a.indexOf("@")) ;
// let d = a[0]
//document.write(a.length)
// for (i = 1; i < c.length; i++) {
//   if (i != c.length - 1) {
//   	d = d + "*"
//   }
//   else{
//   	d = d + c[i];
//   }
// }
// console.log(d)

function ration(name) {
    a ={atta : 200,
        rice :100
    }
    b =""
    for (let key in a){
        if (key == name){
            b = key
            return b
        }
        // console.log(key)
    }
    console.log(b)

}
console.log(ration("atta"))
// console.log(key)
