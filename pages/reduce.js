let b=["he is a pretty bastard"]
let vowels ={
	a:0,
	e:0,
	i:0,
	o:0,
	u:0
}
let d = b.reduce((g,c)=>{
	for (i=0;i<c.length;i++){
		if (c[i] in vowels){
			g++
			vowels[c[i]]=vowels[c[i]]+1
		}
	}
	return g
},0)
// console.log(vowels)
console.log(d)
console.log(vowels)

