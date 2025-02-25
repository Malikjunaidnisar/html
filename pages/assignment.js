// //a="1x1=1\n1x2=2\n1x3=3\n1x4=4\n1x5=5\n1x6=6\n1x7=7\n1x8=8\n1x9=9\n1x10=10"
// b="2x1=2\n2x2=4\n2x3=6\n2x4=8\n2x5=10\n2x6=12\n2x7=14\n2x8=16\n2x9=18\n2x10=20"
// c="3x1=3\n3x2=6\n3x3=9\n3x4=12\n3x5=15\n3x6=18\n3x7=21\n3x8=24\n3x9=27\n3x10=30"
// d="4x1=4\n4x2=8\n4x3=12\n4x4=16\n4x5=20\n4x6=24\n4x7=28\n4x8=32\n4x9=36\n4x10=40"
// e="5x1=5\n5x2=10\n5x3=15\n5x4=20\n5x5=25\n5x6=30\n5x7=35\n5x8=40\n5x9=45\n5x10=50"
// //console.log(a)
// //console.log(b)
// //console.log(c)
// //console.log(d)
// //console.log(e)
// let a=49
// if (a>=80) {
// 	console.log(`${"your mark is"} ${a}${" your grade is A"}`)
// }
// if (a>=70 && a<80) {
// 	console.log(`${"your mark is"} ${a} ${"your grade is B"}`)
// }
// if (a>=60 || a>60 && a<70) {
// 	console.log(`${"your mark is"} ${a} ${"your grade is C"}`)
// }
// if (a>=50 || a>50 && a<60){
// 	console.log(`${"your mark is"} ${a} ${"your grade is D"}`)
// }
// if (a<50){
// 	console.log(`${"your mark is"} ${a} ${"you have failed in exam repeat again this year"}`)
// }
// for ( num = 1; num <= 100; num = num + 1){
// 	if (num % 10 == 0 && num == 100){
// 		console.log("you made it!")
// 	}
// 	else if (num % 10 == 0 && num == 50){
// 		console.log("half way there!")
// 	}
// 	else if ( num % 10 == 0 ){
// 		console.log("checkpoint" + num)
// 	}
// 	else {continue;}
// }
// console.log("All done!")
// // let num = 10;
// // let count = 1;
// // while(count <= 10){
// // 	console.log(`${num}${"x"}${count}${"="}${num*count}`);
// // 	count = count + 1;
// // }
// let a = "example@example.com";
// let b = "";
// for (let i = 0; i < a.length; i++){
// 	if (a[i] === 0 || a[i] === "@" ){
// 		b= b+ a[i]
// 	}else {
// 		b =b + a.slice(a[i]-1,)
// 	}
// }
// console.log(b);
//console.log(a[1])
function truncateString (string,lenght) {
	let a = string.slice(0,lenght)
	return a
}
let b = truncateString("hello",3)
console.log(b)