import React from 'react';
import "./register.css";
import { useState,useEffect } from 'react';
import {Link,useNavigate } from "react-router-dom"
import AmazonLogo from "../../Amazon_Logo.png"
import { useSelector,useDispatch } from 'react-redux';
import {registerInitiate} from "../../redux/actions"

const Register = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const  {user}  = useSelector(state =>state.data)
  const navigate = useNavigate();



  useEffect(()=>{
    if(user){
      navigate("/");
    }
    
  },[user,navigate]);//dispatch

  let dispatch = useDispatch();

  const register = e =>{
    e.preventDefault();
    dispatch(registerInitiate(email,password))
    setEmail("");
    setPassword("");  
  }

  return (
    <div className='register'>
        <Link to="/">
          <img src={AmazonLogo} alt="logo" className='register-logo'/>
        </Link>
        <div className="register-container">
            <h1>Create Account</h1>
            <form>
            <h5>Email</h5>
              <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} />
              <h5>Password</h5>
              <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
              <button type='submit' onClick={register} className='continue'>Continue</button>
              <div className="detail">
                <p>Already have an account ?</p>
                <Link to="/login" className="signin-link">
                  <p>Sign In</p>
                </Link>
              </div>
            </form>
        </div>
    </div>
  )
}

export default Register