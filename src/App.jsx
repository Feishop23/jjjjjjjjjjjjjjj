import { useState } from 'react'
import { NavLink,Routes,Route } from 'react-router-dom'
import './App.css'
import { Contacto } from './Barra/Contacto'
import Home from './Barra/Home'
import useActive from './Barra/hooks/useActive'
import { Informacion } from './Barra/Informacion'
import { Inicio } from './Barra/Inicio'

function App() {
 
  return (
    
      <div className='App'>
          <div className='appBarra'>
          
          <li >
            <NavLink className='NavLink' id='Home' to='/'>Home</NavLink>
          </li>
          <li >
            <NavLink className='NavLink' to='/Barra/Informacion.jsx'>More information</NavLink>
          </li>
          
          <li >
            <NavLink className='NavLink' to='/Barra/Contacto.jsx'>Contact</NavLink>
          </li>
          
            </div>  
        
          <div>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/Barra/Informacion.jsx' element={<Informacion/>}/>
              <Route path='/Barra/Contacto.jsx' element={<Contacto/>}/>
            </Routes>
            </div>  
        </div>
    
      
    
  )
}

export default App
