const express=require('express')
const app=express()
const imageRouter=require("./routes/imageRouter")
const cors=require("cors")
const mongoose = require('mongoose')
require("dotenv").config()


app.use(cors({
    credentials:true,
}))

app.use(express.json())

app.use('/',imageRouter)


mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("server lisening on  port 8080")
    })
}).catch((err)=>{
    console.log(err);
})