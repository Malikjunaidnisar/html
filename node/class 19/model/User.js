const {mongoose} = require('mongoose')
//const {MongoClient} = require('mongodb')


// async function main() {
//     try {
//         await mongoose.connect('mongodb+srv://Saya1train:saya1train@cluster0.at06fof.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        const Schema =mongoose.Schema;
        const userSchema = new mongoose.Schema({
            name:{
                type:String,
                
            },
            lastname:{
                type:String
            }

        })
        const User = mongoose.model('Users',userSchema)
        
    // } catch (error) {
    //     console.log(error.message)
    // }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
//}
module.exports={User};