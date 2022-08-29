import React, { useState } from 'react'

export const useScroll = () => {
    const [scroll, setScroll] = useState('')


    window.addEventListener('scroll', ()=>{
      const animacion = document.getElementById('ProgressHtml')
      const posicion = animacion.getBoundingClientRect().top
      const tamañoDePantalla = window.innerHeight/1

      {posicion < tamañoDePantalla ? animacion.style.animation = 'mover 2s ease-out':''}
      setScroll(posicion)
  })
    window.addEventListener('scroll', ()=>{
      const anim = document.getElementById('ProgressJs')
      const pos = anim.getBoundingClientRect().top
      const tamañoDePan = window.innerHeight/1

      {pos < tamañoDePan ? anim.style.animation = 'mover 2s ease-out':''}
      
  })

  window.addEventListener('scroll', ()=>{
      const animacio = document.getElementById('ProgressCss')
      const posicio = animacio.getBoundingClientRect().top
      const tamañoDePantall = window.innerHeight/1

      {posicio < tamañoDePantall ? animacio.style.animation = 'mover 2s ease-out':''}
  })

  window.addEventListener('scroll', ()=>{
      const animaci = document.getElementById('ProgressReact')
      const posici = animaci.getBoundingClientRect().top
      const tamañoDePantal = window.innerHeight/1

      {posici < tamañoDePantal ? animaci.style.animation = 'mover 2s ease-out':''}
  })
  
  window.addEventListener('scroll', ()=>{
      const animac = document.getElementById('ProgressPy')
      const posic = animac.getBoundingClientRect().top
      const tamañoDePanta = window.innerHeight/1

      {posic < tamañoDePanta ? animac.style.animation = 'mover 2s ease-out':''}
  })


  ////////Texto///////

  window.addEventListener('scroll', ()=>{
    const Animation = document.getElementById('conUno')
    const Position = Animation.getBoundingClientRect().top
    const Pantalla = window.innerHeight/1

    {Position < Pantalla ? Animation.style.animation = 'Uno 2s ease-out':''}
})
window.addEventListener('scroll', ()=>{
  const Animac = document.getElementById('conDos')
  const Aosic = Animac.getBoundingClientRect().top
  const AamañoDePanta = window.innerHeight/1

  {Aosic < AamañoDePanta ? Animac.style.animation = 'Dos 2s ease-out':''}
})
  console.log(scroll)
  return {
    scroll
  }
}
