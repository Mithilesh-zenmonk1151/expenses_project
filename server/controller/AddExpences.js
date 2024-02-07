
const User= require("../module/Income");

exports.AddExpences = async (req, res) => {
    try {
      
      const {
        email,
      selectexpence,
        expenceName,
        expancecategory,
        expanceType,
        ammount
        
       
      } = req.body
      
  
     console.log("req body",req.body); 
      if (
        !email||
        !selectexpence||
        !expenceName ||
        !expancecategory ||
       
        !expanceType||
        !ammount
      ) {
        return res.status(403).send({
          success: false,
          message: "All Fields are required",
        })
      }
      
      
  
      
     
  
      
     
      
      const expense = await User.create({
        selectexpence,
        expenceName,
        expancecategory,
        expanceType,
        ammount
        
      })
  
      return res.status(200).json({
        success: true,
        expense,
        message: "Expencese added successfully",
      })
    } catch (error) {
      console.error(error)
      return res.status(500).json({
        success: false,
        message: "User cannot be added. Please try again.",
      })
    }
  }




  exports.getUser = async (req,res) => {

    const user = await User.findById(req.params.id);
    res.json(user);
    

}

exports.editUser = async (req,res) => {
    const { id } = req.params;
    console.log(req.body)
    console.log(id)
   
    try {
        const data = await User.findByIdAndUpdate({_id: id}, req.body)
      console.log(data)
        if(data.matchedCount == 0)
        {
            res.json({'status': 'user not found'}); 
        }

else{
  res.json({'status': 'User updated'});
}
        
    } 
    catch (err) {
        console.log(err)
        res.json({'status': 'something went wrong'});
    }


}
  
  