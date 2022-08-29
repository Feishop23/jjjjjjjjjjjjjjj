import React, { useState } from 'react'

export const useReset = () => {
    const [dataForm, setdataForm] = useState({
        nombre: '',
        email:'',
        mensaje:''
      })
      const dataInitial = {
        nombre: '',
          email:'',
          mensaje:''
      }
      const handleSubmit = () => {
        setTimeout(()=>{
          setdataForm(dataInitial)
        },1000)
      }
  return{
setdataForm,
dataForm,
handleSubmit
  }
}
