import React from 'react'
import './Footer.css'
import { ImFacebook2 } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { SiLinkedin } from "react-icons/si";
import { TbBrandTiktok } from "react-icons/tb";


export const Footer = () => {
  return (
    <div className='Footer'>
      
      <div>
        <div>
          <div>
            <h1>i-Tierra</h1>
            <h2>¿Queines somos?</h2>
            <h2>i-Tierra Index</h2>
            <h2>Inversionistas</h2>
            <h2>Ayuda</h2>
          </div>
          <div>
            <h1>Legales</h1>
            <h2>Politicas de privacidad</h2>
            <h2>Términos y condiciones</h2>
          </div>
        </div>
        <div > 
          <h1>Contacto</h1>
          <section className='Footer-Icons'>
            <ImFacebook2/>
            <ImTwitter/>
            <SiLinkedin/>
            <TbBrandTiktok/>
          </section>
          <h2>contacto@i-tierra.com</h2>
        </div>
      </div>

      <div className='Footer-Logo'>
        <img src="logoFooter.svg" alt="imagen" />
      </div>

      <div>
        <div >
          <h4>i-Tierra S.A. de C.V. - Todos los derechos reservados</h4>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  )
}
