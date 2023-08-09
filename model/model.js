const mongoose=require('mongoose')

const url= process.env.MONGO_URL

mongoose.set("strictQuery",false);

mongoose.connect(url)
.then(result=>{console.log("connected to mongodb")})
.catch((error)=>{
    console.log(error)
}) 



// create a schema
const Schema=new mongoose.Schema({
    Name:{
        type:String,
    },
    Email:{
        type:String,
        unique:true
    },
    Password:{
        type:String
    },
    
})

// create a model
const model=mongoose.model("Emails",Schema,"tokens");


 module.exports=model