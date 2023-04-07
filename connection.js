const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config()

const URL = process.env.MONGO_URL;


mongoose.set('strictQuery', false);
async function connection() {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connection established successfully');
  } catch (error) {
    console.log('An error occurred:', error);
  }
}

 
connection();