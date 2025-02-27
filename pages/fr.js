const products =['mouse','mouse',"keyboard","keyboard","charger"]

const fr ={}

for (let product in products){
    if(!fr[product]){
        fr[product]=1
    }else{
        fr[product]=fr[product]+1
    }
}
console.log(fr)