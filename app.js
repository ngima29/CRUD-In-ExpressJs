require('dotenv').config()
const express = require('express')
const { join } = require('path')
const connectDB = require('./db/connectDb.js')
const app = express()
const web = require('./routes/web.js')

const port = process.env.PORT
const DATABASE = process.env.DATABASE

// databse connection 
connectDB(DATABASE)

// middleware form data from frontend

app.use(express.urlencoded({extended:false}))

// static files
app.use(express.static(join(process.cwd(), "public")))

// set template engine
app.set("view engine", "ejs")

//load Routes
app.use('/student',web)



app.listen(port,()=>{
    console.log(`server is runngin at http://localhost:${port}`);
})
