import React from 'react'
import { NavBar } from '../components/NavBar/NavBar'
import {Footer} from '../components/Footer/Footer'
const LayoutPrincipal = ({children}) => {
  return (
    <div style={{display:'flex', flexDirection:'column'}}>  
        <NavBar/>
        {children}
        <Footer/>
    </div>
  )
}

export default LayoutPrincipal