const mongoose= require("mongoose");


const userSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim:true,
    },
    name:{
        type:String,
        required:true,
        trim:true,

    },
    password:{
        type:String,
        required:true,
    },
    
    active:{
        type:Boolean,
        default:true
    },
    additionalDetails:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'accountType'
    },
    products:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Products"
        }
        
        
    ],
   

    income:  {
        type:String,
    },

    image:  {
        type:String,
    },
    statusOfProducts: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"statusOfProducts",
            
        }
    ]

}
,
{ timestamps: true }

)

module.exports = mongoose.model("user", userSchema)