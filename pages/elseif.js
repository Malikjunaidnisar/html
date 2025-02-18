let a=49
if (a>=80) {
	console.log(`${"your mark is"} ${a}${" your grade is A"}`)
}
else if (a>=70) {
	console.log(`${"your mark is"} ${a} ${"your grade is B"}`)
} 
else if (a>=60) {
	console.log(`${"your mark is"} ${a} ${"your grade is C"}`)
}
else if (a>=50 || a>50 && a<60){
	console.log(`${"your mark is"} ${a} ${"your grade is D"}`)
}
else {
	console.log(`${"your mark is"} ${a} ${"you have failed in exam repeat again this year"}`)
}