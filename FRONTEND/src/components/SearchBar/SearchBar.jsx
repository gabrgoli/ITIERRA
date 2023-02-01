import React from 'react'
import { SlMagnifier } from "react-icons/sl";
import './SearchBar.css'

export const SearchBar = () => {
  return (
    <div className='SearchBar'>
      <div>
        <input type="text" placeholder='Buscar lead'/>
        <SlMagnifier/>
        <button>
          <SlMagnifier/>
        </button>
      </div>

    </div>
  )
}
