class Human{
    constructor(name){
        if(new.target === Human){
            throw new Error("human error")
        }
    }
    walk(){
        throw new Error("error")
    }
}
class junaid extends Human{
    #name
    constructor(name,speed){
        this.#name=name
        this.speed=speed
    }
    // walk(speed){
        // return speed     
    // }

}
const j = new junaid('malik',10)
let a =j.walk(10)
console.log(a)