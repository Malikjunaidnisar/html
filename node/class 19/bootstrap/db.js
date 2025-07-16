const {mongoose} = require('mongoose')
async function db(){
    try {
        await mongoose.connect('mongodb+srv://Saya1train:saya1train@cluster0.at06fof.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log("Connet to MongoDb-Atlas")
    } catch (error) {
      console.log(error.message)  
    }

}
module.exports={
    db
}
