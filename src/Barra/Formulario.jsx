import React, { useState } from 'react'
import { useReset } from './hooks/useReset'
export const Formulario = () => {
  const {handleSubmit,dataForm,setdataForm} = useReset()
  
  return (
    <div className='Formulario' >
        <form onSubmit={handleSubmit} action="https://formsubmit.co/feiberth10portilla@hotmail.com"  target='_blank' method="POST" >
        <input onChange={e=>setdataForm(e.target.value)} value={dataForm.nombre} type="text" className="form_input" placeholder="Nombre:" required name="Nombre"  id="name"/>
        <input  onChange={e=>setdataForm(e.target.value)} value={dataForm.email} type="email" className="form_input" placeholder="Email:" required name="Correo" id="email"/>
        <textarea  onChange={e=>setdataForm(e.target.value)} value={dataForm.mensaje} className="form_input form_input--message" placeholder="Mensaje:" required id="message" name="Mensaje"></textarea>
        <input type="submit"  target='_blank' value="Enviar" className="form_cta"/>
        </form>
    </div>
  )
}
