import React from 'react'
import { SearchBar } from '../SearchBar/SearchBar'
import { IoLocationSharp } from "react-icons/io5";
import { BsQuestionSquare } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import './NavBar.css'
export const NavBar = () => {
  return (
    <div className='NavBar'>
        <img src="logo.svg" alt="itierra" />
        <div className='NavBar-SearchBar'><SearchBar/></div>
        <div className='NavBar-Icons'>
          <IoLocationSharp/>
          <IoLocationSharp/>
          <IoLocationSharp/>
          <BsQuestionSquare/>
          <div><FaUserTie/></div>
        </div>
    </div>
  )
}
