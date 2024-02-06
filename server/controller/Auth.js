const bcrypt = require("bcrypt")
const User = require("../module/user")

const jwt = require("jsonwebtoken")


const Profile = require("../module/profile");
require("dotenv").config()


exports.signup = async (req, res) => {
  try {
    
    const {
      name,
      email,
      password,
      
      image
      
    } = req.body
    

   console.log("req body",req.body); 
    if (
      !name||
      !email ||
      !password ||
     
      !image
    ) {
      return res.status(403).send({
        success: false,
        message: "All Fields are required",
      })
    }
    
    

    
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists. Please sign in to continue.",
      })
    }

    
   
    const hashedPassword = await bcrypt.hash(password, 10)

   

    const profileDetails = await Profile.create({
      gender: null,
      dateOfBirth: null,
      about: null,
      contactNumber: null,
    })
    
    const user = await User.create({
      name,
     
      email,
      
      password: hashedPassword,
      
     
     
      image: "",
    })

    return res.status(200).json({
      success: true,
      user,
      message: "User registered successfully",
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "User cannot be registered. Please try again.",
    })
  }
}


exports.login = async (req, res) => {
  try {
    console.log("Login Button hitted")
    const { email, password } = req.body

    
    if (!email || !password) {
      
      return res.status(400).json({
        success: false,
        message: `Please Fill up All the Required Fields`,
      })
    }

    
    const user = await User.findOne({ email }).populate("additionalDetails").exec();
   

    
    if (!user) {
      
      return res.status(401).json({
        success: false,
        message: `User is not Registered with Us Please SignUp to Continue`,
      })
    }

    
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        { email: user.email, id: user._id, role: user.role },
        process.env.JWT_SECRET,
        {
          expiresIn: "24h",
        }
      )

      
      user.token = token
      user.password = undefined
      
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      }
      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        message: `User Login Success`,
      })
    } else {
      return res.status(401).json({
        success: false,
        message: `Password is incorrect`,
      })
    }
  } catch (error) {
    console.error(error)
    
    return res.status(500).json({
      success: false,
      message: `Login Failure Please Try Again`,
    })
  }
}

   
