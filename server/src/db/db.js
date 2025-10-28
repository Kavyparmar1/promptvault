const mongoose = require('mongoose')

async function connectDb() {
       try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('databse connectd');
        
       } catch (error) {
         console.log('db error',error.message);
         
       }
}

module.exports = connectDb