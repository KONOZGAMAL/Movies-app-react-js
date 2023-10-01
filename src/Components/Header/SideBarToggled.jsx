import React, { useState } from "react";
import {NavLink } from "react-router-dom";
import './SideBarToggled.css';
import NotesIcon from "@mui/icons-material/Notes";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
export default function SideBarToggled() {
  const [show , setShow] = useState(true);
  const showMenu = ()=>{
    setShow(current => !current)
  }
  const activeItems =({isActive})=>{
    return {
      background:isActive ? 'black': 'linear-gradient(var(--clr-i) , var(--clr-ii))',
     }
  }
  return (
    <div className="toggleParent">
       <div className='positionBar'>
      <div className='menu'>
         <span onClick={showMenu}>{show?<NotesIcon/>:<CloseOutlinedIcon />}</span> 
      </div>
      <div className={show?"toggle":'block'}>
          <NavLink style={activeItems} to="/"
          className="icons One" ><HomeOutlinedIcon /></NavLink> 
          <NavLink style={activeItems} to="/about"
          className="icons Two" ><AccountBoxIcon/></NavLink>
          <NavLink style={activeItems} to="/projects" 
          className="icons Three"><SpaceDashboardOutlinedIcon /></NavLink> 
          <NavLink style={activeItems} to="/contact"
          className="icons Four"><ChatBubbleOutlineOutlinedIcon /></NavLink>
      </div>
       </div>
    </div>
  );
}