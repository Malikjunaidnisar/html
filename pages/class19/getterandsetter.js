const product ={
    title:'LapTop',
    price:2000,
    get details(){
        return `current price of ${product.title} is ${product.price}`
    },
    set details(value){
        const parts=value.split(' ')
        this.title=parts[0],
        this.price=parts[parts.length-1]
    }
}
console.log(product.details)
product.details='handbag is 5000'
console.log(product.details)