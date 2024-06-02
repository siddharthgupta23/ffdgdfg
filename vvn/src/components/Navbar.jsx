import React from 'react';

import image from '../dfvg/eight.jpg'
import {IconButton} from '@mui/material';
import {Search,Menu,Person} from "@mui/icons-material";
import variables from "../styles/variables.scss"
import { useState } from "react";
import {useSelector,useDispatch} from "react-redux";
import{setLogout} from "../redux/state";
import{Link} from "react-router-dom";
import "../styles/Navbar.scss";

const Navbar = () => {
  const[dropdownMenu,setDropdownMenu]=useState(false)
  const dispatch=useDispatch();
  const user=useSelector((state) =>state.user)
  return (
    <div className="Navbar">
     <a href="/">
        <img src={image} alt="logo"/>
        </a> 
        <div className="Navbar_search">
            <input type="text" placeholder="Search..."/>
            <IconButton>
               <Search sx={{color:variables.pinkred}}/>
               
            </IconButton>
        </div>
        <div className="navbar_right">
        {user ? (
  <a href="/create-listing">Become a host</a>
) : (
  <a href="/login">Login</a>
)}
<button className="navbar_right_account"onClick={()=>setDropdownMenu(!dropdownMenu)}>
<Menu sx={{color:variables.darkrey}}/>
{!user ?(
<Person sx={{color:variables.darkrey}}/>
)
:
(
<img src={`http://localhost:3082/${user.profileImagePath.replace("public","")}`}alt ="profile image" style={{objectFit:'cover',borderRadius:"50%"}}/>
)
}
</button>
{
  dropdownMenu && !user &&(
    <div className="navbar_right_accountmenu">
      <Link to="/login">Login</Link><br/>
      <Link to ="/register">Sign Up</Link>
  
      </div>

  )
}
{dropdownMenu && user &&(
  <div className="navbar_right_account_menu">
    <Link to="">Trip List</Link><br/>
    <Link to="">Wish List</Link><br/>
    <Link to="">Property List</Link><br/>
    <Link to="">Reservation List</Link><br/>
    <Link to="">Become a host</Link><br/>
    <Link to="/login" on Click={()=>{
      dispatch(setLogout())
    }}>Log out</Link>

    </div>

)}

</div>
    </div>
  )
}
export default Navbar



