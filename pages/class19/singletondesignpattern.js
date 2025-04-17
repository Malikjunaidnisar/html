class Authentication{
    static isUserLoggedIn
    constructor(){
        if(Authentication.instance){
            return Authentication.instance
        }
        Authentication.instance=this
        this.isUserLoggedIn=false
    }
    loginUser(){
        this.isUserLoggedIn=true
        return 'user login'
    }
    logoutUser(){
       this.isUserLoggedIn=false
       return 'log out' 
    }

}
const instance1= new Authentication()
const instance2= new Authentication()
console.log('Authenticaltion',instance1 === instance2)
console.log(instance1.loginUser())
console.log(instance1)
console.log(Authentication.isUserLoggedIn)


