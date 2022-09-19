import { useState } from 'react'
import { NavLink,Routes,Route } from 'react-router-dom'
import './App.css'
import { Contacto } from './Barra/Contacto'
import Home from './Barra/Home'
import useActive from './Barra/hooks/useActive'
import { Informacion } from './Barra/Informacion'
import { Inicio } from './Barra/Inicio'

function App() {

  const [activador, setactivador] = useState()
 const activo = () => {
setactivador(!activador)
 }
 console.log(activador)
  return (
    
      <div className='App'>
          <div className='appBarra'>
          
          <li >
            <NavLink className='NavLink' id='Home' to='/'>{activador ? "Inicio" : "Home"}</NavLink>
          </li>
          <li >
            <NavLink className='NavLink' to='/Barra/Informacion.jsx'>{activador ? "Informacion" : "Information"}</NavLink>
          </li>
          
          <li >
            <NavLink className='NavLink' to='/Barra/Contacto.jsx'>{activador ? "Contacto" : "Contact"}</NavLink>
          </li>
          
            </div>  
        <div><button className='cambioDeIdioma' onClick={activo}>{activador ? 'English' : 'Español'}</button></div>
          <div>
            <Routes>
              <Route path='/' element={<Home activador={activador}/>}/>
              <Route path='/Barra/Informacion.jsx' element={<Informacion activador={activador}/>}/>
              <Route path='/Barra/Contacto.jsx' element={<Contacto activador={activador}/>}/>
            </Routes>
            </div>  
        </div>
    
      
    
  )
}

export default App
