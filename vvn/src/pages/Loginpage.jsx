import React from 'react'
import {useState} from 'react'
import {setLogin } from "../redux/state";
import{useDispatch} from "react-redux";
import "../styles/login.scss";
import { useNavigate } from 'react-router-dom';

const Loginpage = () => {
  const [email,setEmail]=useState("");
  const dispatch=useDispatch()
  const Navigate=useNavigate()
  const[password,setPassword]=useState("")
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
    
  //   try {
  //     const response = await fetch("http://localhost:3082/auth/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email, password }),
  //     });
  
  //     const loggedIn = await response.json();
  //     if(loggedIn)
  //     {
  //       dispatch(
  //         setLogin({
  //           User:loggedIn.User,
  //           token:loggedIn.token
  //         }

  //         )
  //       ) ;Navigate("/")
  //     }
      
      
  
  //   } catch (err) {
  //     console.error("Error during login:", err.message);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("http://localhost:3082/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }
  
      const loggedIn = await response.json();
      
      if (loggedIn.token) {
        dispatch(
          setLogin({
            user: loggedIn.user,
            token: loggedIn.token,
          })
        );
        Navigate("/");
      } else {
        throw new Error('Token not found');
      }
    } catch (err) {
      console.error("Error during login:", err.message);
    }
  };
  
  return (
    <div className='login'>
      <div className='login_content'>
        <form className='login_content_form' onSubmit={handleSubmit}>
        <input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}required/>
        <input type="password" placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)}  required/>
         <button type="Submit">Submit </button>
        </form>
        <a href="/register">do not have an account sign in here"</a>
      </div>

      Loginpage
    </div>
  )
}

export default Loginpage
