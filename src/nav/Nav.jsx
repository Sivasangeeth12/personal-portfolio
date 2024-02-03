import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { RiServiceLine } from "react-icons/ri";
import { IoMdContact } from "react-icons/io";
import './nav.css'
import { useState } from 'react';

const Nav = () => {
  const[activeState, setactiveState] = useState('#');

  return (
    <nav>
      <a href='#' onClick={()=>setactiveState('#')} className={activeState==='#' ? 'active' : ""}><IoHomeOutline/></a>
      <a href='#about' onClick={()=>setactiveState("#about")} className={activeState==="#about" ? 'active' : ""}><FaRegUser/></a>
      <a href='#experience' onClick={()=>setactiveState('#experience')} className={activeState==='#experience' ? 'active' : ""}><FaBook/></a>
      <a href="#portfolio" onClick={()=>setactiveState("#portfolio")} className={activeState==="#portfolio" ? 'active' : ""}><RiServiceLine/></a>
      <a href='#footer' onClick={()=>setactiveState('#footer')} className={activeState==='#footer' ? 'active' : ""}><IoMdContact/></a>


    </nav>
  )
}

export default Nav