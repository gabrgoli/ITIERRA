import React from 'react'
import './FormNewLead.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
//import { uuid } from 'uuidv4';
import { v4 as uuidv4 } from 'uuid';
import {  NEWENTRY } from '../../redux/actions'


export const FormNewLead = () => {

    const dispatch=useDispatch()
        
    let[input,setInput]=useState({})
    let [errors, setErrors] = useState({}) 
    const [loader,setLoader] = useState(false)
        
    //FUNTION SUBMIT
    function submit(){
        input._id=uuidv4();
        input.status='nuevo';
        //dispatch(NEWLEAD(input))
        dispatch(NEWENTRY(input))
        setInput({})
        setLoader(false);
        console.log("envio completo",input);
        window.location.reload(false);
    }
    

    //FUNTION HANDLECHANGE
    const handleChanchge=async (ev)=>{
        setInput((input)=>({...input,[ev.target.name]:ev.target.value}))
        setErrors((errors)=>({...errors,[ev.target.name]:""}))
    }

    //FUNCTION HANDLESUBMIT
    const handleSubmit= async(e)=>{
        e.preventDefault();
        errors=getErrors(input)
        setErrors(getErrors(input))
        Object.entries(errors).length !== 0?
            console.log('errores:',errors)
            :
            submit()
            
}



  return (
    <div>
        <form className='FormNewLead' onSubmit={(e) => handleSubmit(e)}>
            <h1>NUEVO LEAD</h1>
            <h2>Lorem ipsum dolor sit amet</h2>

            <section className="form__group">
                <input type="input" className="form__field" onChange={(e) => handleChanchge(e)} placeholder="Nombre" name="nombre" id='nombre' value={input.nombre} required />
                <label className="form__label">Nombre</label>
            </section>
            <div className='Form-Tel-Email'>
                <section className="form__group">
                    <input type="input" className="form__field" onChange={(e) => handleChanchge(e)}  placeholder="Teléfono" name="telefono" id='telefono' value={input.telefono} required />
                    <label className="form__label">Teléfono</label>
                </section>
                <section className="form__group">
                    <input type="input" className="form__field" onChange={(e) => handleChanchge(e)} placeholder="Correo electrónico" name="email" id='email' value={input.email} required />
                    <label className="form__label">Correo electrónico</label>
                </section>
            </div>
            <button type="submit" name="crear" className="ButtonCreate ButtonForm" value="Button1">CREAR LEAD</button>
            <section>
            {
                Object.values(errors).map((error,i) => {
                    return <h4 key={i}>{error}</h4>
                })
            }
            </section>
        </form>
    </div>
  )
}


function getErrors(input){
    let errors = {};
  
    //email Validation
    if (!input.email){errors.email = "El e-mail no puede estar vacío"}
    else if(!(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/).test(input.email)){errors.email = "Email its not a valid email"}
    
    //nombre Validation
    if (!input.telefono){ errors.telefono = "El teléfono es requerido"} 
    else if(!(/\d/).test(input.telefono)) {errors.telefono = "El teléfono debe ser un número"}
    
    //tel Validation
    if (!input.nombre){ errors.nombre = "El nombre es requerido"} 
  
    return errors
  }