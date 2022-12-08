const mongoose = require("mongoose")

//defining schema

const studentSchema = new mongoose.Schema({
    name:{type:String, required:true, trim:true},
    email:{type:String, required:true, trim:true},
    faculty:{type:String, required:true, trim:true},
    semester:{type:String, required:true, trim:true},
    roll:{type:Number, required:true, trim:true}
})

// model

const StudentModel = mongoose.model("student", studentSchema)

module.exports = StudentModel