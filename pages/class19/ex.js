class BankAccount{
    #Balance
    constructor(initialBalance){
        this.#Balance=initialBalance
    }
    getBalance(){
        return this.#Balance
    }
    deposit(amount){
        this.#Balance+=amount
    }
}
const account=new BankAccount(100)
account.deposit(500)
// console.log(account.getBalance())
// console.log(account.#Balance)
class vehicle{
    constructor(speed){
        this.speed=speed
    }
    accelerate(increment){
        this.speed+=increment
        return this.speed
    }
}
const nv=new vehicle(400)
console.log(nv)
console.log(nv.accelerate(500))