const mongoose = require("mongoose")


const expenssesSchema = new mongoose.Schema({
    gender: {
		type: String,
	},
	dateOfBirth: {
		type: String,
	},
	about: {
		type: String,
		trim: true,
	},
	contactNumber: {
		type: Number,
		trim: true,
	},
  income: { type: Number },
  
  expensses: [
    {
      type: Number,
      
    },
  ],
  investment:{
    type:Number,

  },
  saving:{
    type:Number
  },
  transactions:{
    type:String,
    
  },
 
  
  
 
 
  
  createdAt: { type: Date, default: Date.now },
})


module.exports = mongoose.model("Expensses", expenssesSchema)
