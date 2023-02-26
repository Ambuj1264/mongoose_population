const mongoose =require("mongoose")

mongoose.set('strictQuery', true)
mongoose.connect("mongodb://localhost:27017/hello").then(res=>{
    console.log("connected successfully")
}).catch(err=>{
    console.log("not connected successfully")
})