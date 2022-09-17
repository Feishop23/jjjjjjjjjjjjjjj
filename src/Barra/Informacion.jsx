import React from 'react'
import { useScroll } from './hooks/useScroll'

import './Styles/Progress.css'
export const Informacion = ({activador}) => {
useScroll()



  const RM = 'https://rickandmorty-feiberth.netlify.app/'
  const Wa = 'https://weatherfromfeiberth.netlify.app/'
  const FR = 'https://agg-movie.netlify.app/'
  const CD = 'https://user-cards-feiberth.netlify.app/'
  const Ic = 'https://ease-shop-feiberth.netlify.app/'
  return (
    <div className='Information'>
      <div className='Works'>
        <ul>
          <li>
            <a id='IMG' target='_blank' href={RM}>Rick and Morty  <img src="/img/RM.png" alt="" /></a>
           
            </li>
          <li>
            <a target='_blank' href={Wa}>Wheather App <img src="\img\WA.png" alt="" /></a>
            
            </li>
          <li>
            <a target='_blank' href={FR}>Create Form <img src="\img\Screenshot.png" alt='' /></a>
            
            </li>
          <li>
            <a target='_blank' href={CD}>Cards Randoms<img src="\img\CR.png" alt="" /></a>
            </li>
          <li>
            <a target='_blank' href={Ic}>I-commer <img src="\img\i-c.png" alt="" /></a>
            
            </li>
        </ul>
        
      </div>
      <div className='InformacionP'>
        <div className='InformacionH'>
              <div className='Overflow'>{activador ? <p id='conUno'>Me consideran muy responsable en mi entorno laboral así como sociable, puedo trabajar muy bien tanto en grupo como en solitario, me gusta recibir nuevos trabajos y retos porque tengo el pensamiento de que así mejoraré y ampliaré mis conocimientos.</p> : <p id='conUno'>I consider myself very responsible in my work environment as well as sociable, I can work very well in a group as well as alone, I like to receive new jobs and challenges because I have the thought that this way I will improve and expand my knowledge.</p>}
                {activador ? <p id='conDos'>Soy un residente permanente de los Estados Unidos con nacionalidad ecuatoriana buscando seguir mis sueños como programador.</p> : <p id='conDos'>
                I am a permanent resident of the United States with Ecuadorian nationality looking to follow my dreams as a programmer.
                </p> }
                
              </div>
        </div>
      </div>
      <div>
        
       <ul className='forFatherBarra'>{
        activador ? <p>Porcentajes de conocimiento.</p> : <p>Percentages of knowledge.</p>
       }
        <li> 
          <div className='fatherBarra'>
             <div className="barraRM">
               <div className='overflowRM'>
                 <div id='ProgressReact' className="ProgressReact"></div>
               </div>
             </div>
           </div>
           <p>
           react: 90%
           </p>
           </li>

        <li> 
          <div className='fatherBarra'>
             <div className="barraRM">
               <div className='overflowRM'>
                 <div id='ProgressJs' className="ProgressJs"></div>
               </div>
             </div>
           </div>
           <p>
           JavaScript: 89%
           </p>
           </li>
        <li><div className='fatherBarra'>
             <div className="barraRM">
               <div className='overflowRM'>
                 <div id='ProgressHtml' className="ProgressHtml"></div>
                 
               </div>
             </div>
           </div>
           <p>
           html: 85%
           </p>
           </li>

        <li> 
          <div className='fatherBarra'>
             <div className="barraRM">
               <div className='overflowRM'>
                 <div id='ProgressCss' className="ProgressCss"></div>
               </div>
             </div>
           </div>
           <p>
           css: 79%
           </p>
           </li>


        <li>
          <div className='fatherBarra'>
             <div className="barraRM">
               <div className='overflowRM'>
                 <div id='ProgressPy' className="ProgressPy"></div>
               </div>
             </div>
           </div>
           <p>
           python: 60%
           </p>
           </li>

       </ul>
      </div>
     
      </div>
  )
}
