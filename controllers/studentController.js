const StudentModel = require("../modules/Student.js")

class StudentController{
    //insert data
    static insertStudent = async(req,res)=>{
     try {
        const {name,email,faculty,semester,roll} = req.body
        const doc = new StudentModel({
            name:name,
            email:email,
            faculty:faculty,
            semester:semester,
            roll:roll
        })
        // saving document
        const result = await doc.save()
        res.redirect("/student")

     } catch (error) {
        console.log(error);
     }  

    
    }


    static getAllStudent= async (req,res)=>{
       try {
        const result = await StudentModel.find()
        //console.log(result);
        res.render("index",{data: result}) 
    
       } catch (error) {
        console.log(error);
       }   
    }

    /// edit student
    static editStudent= async (req,res)=>{
       // console.log( req.params.id)
       try {
        const result = await StudentModel.findById(req.params.id)
        //console.log(result);
        res.render("edit",{data:result})   
       } catch (error) {
        console.log(error);
       }
        
       }
       // update
    
       static updateStudentById= async(req,res)=>{
        // console.log(req.params.id);
        // console.log(req.body)
        try {
            // updating doc
            const result = await StudentModel.findByIdAndUpdate(
                req.params.id,req.body) 
                console.log(result);
        } catch (error) {
            console.log(error);
        }
        res.redirect("/student") 
       }

       static deleteStudentById= async(req,res)=>{
        try {
            const result = await StudentModel.findByIdAndDelete(req.params.id)
           console.log(result);
            res.redirect("/student")  
        } catch (error) {
            console.log(error);
        }
         
       }

}

module.exports = StudentController