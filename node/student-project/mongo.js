const mongoose = require('mongoose'); // Or const { MongoClient } = require('mongodb'); for native driver

// IMPORTANT: Replace with your actual MongoDB Atlas connection string
const uri = "mongodb+srv://Saya1train:saya1train@cluster0.at06fof.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

async function connectDB() {
  try {
    await mongoose.connect(uri, {
      // useNewUrlParser: true, // Deprecated in newer Mongoose versions, but good to know
      // useUnifiedTopology: true // Deprecated in newer Mongoose versions
    });
    console.log("Connected to MongoDB Atlas!");

  } catch (err) {
    console.error("MongoDB connection error:", err);
  } finally {
    // Disconnect after operations (optional, depending on your app)
    // await mongoose.disconnect();
    // console.log("Disconnected from MongoDB Atlas.");
  }
}
//connectDB()
module.exports = {connectDB};