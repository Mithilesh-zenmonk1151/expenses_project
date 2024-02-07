import React, {  useState } from "react";
import {  useDispatch } from 'react-redux'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";
import { addUser } from "../slice/userDetailsSlice";

function Login() {
  const [email,setEmail]= useState('');

  const [password, setPassword]= useState('');
  const navigate= useNavigate();

 const dispatch = useDispatch();

  async function postData( data) {
    try {
      let response = await axios.post(
        "http://localhost:4000/api/v1/auth/login",
        data
      );
      
      
     
      if(response.status===200){
        navigate("/userDashboard")
        
        alert("user successfully registered")

      }
      else{


        navigate("/userDashboard");
        alert("user type is not retailer");
      }
      
      dispatch(addUser(response.data.user))
     
      alert("Login Successfully")
    } catch (error) {
      console.log(error);
    
    }
    
  }
  


  const handleOnSubmit= (event)=>{
    
    event.preventDefault();

    //  if(ACCType==="retailer"){
    //   navigate("/retailer-dashboard")
    // }
   

   
    
   

        postData({
         
          email : email,
          password: password
        }) ;
        
       
    
}
  
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="login-page">
      
      <div className="right-login">
        <div className="enter-exclusive">
          <h2 className="exclusive-login">Login in to Exclusive</h2>
          <p className="deal-ent">Enter your details below</p>
        </div>

        <form onSubmit={handleOnSubmit} className="signup-form">
          <input
            value={email}
            className="signup-name"
            placeholder="Enter email or Phone Number"
            name="email"
            onChange={((e)=>setEmail(e.target.value))}
          />
          <input
            required
            type={showPassword ? "text" : "password"}
            name="password"
            
            value={password}
            className="signup-name"
            placeholder="Password"
            onChange={((e)=>setPassword(e.target.value))}
            
          />
           <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="login-show"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>{" "} 
          <div className="login-forgot">
            <button type="submit" className="lo-btn" >
              Log In
            </button>
            <Link to="/login/forget-password" className="forg-btn">
              Forget Password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
