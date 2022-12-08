const mongoose = require('mongoose')

const connectDB= async(DATABASE)=>{
    try {
       await  mongoose.connect(DATABASE)
         console.log("database connected successfully ");
    } catch (error) {
        console.log(error);
    }
}
module.exports = connectDB