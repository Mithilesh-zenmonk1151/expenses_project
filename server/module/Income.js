const mongoose= require("mongoose");


const expenseSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true,

    },
    selectexpence:{
        type:String,
        required:true,
        trim:true,
    },
    expenceName:{
        type:String,
        required:true,
        trim:true,

    },
    expancecategory:{
        type:String,
        required:true,
    },
    
    expanceType:{
        type:String,
        required:true,
       
    },
    ammount:{
        type:Number,
        required:true

    },
    

}
,
{ timestamps: true }

)

module.exports = mongoose.model("expencss", expenseSchema)