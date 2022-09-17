import React from 'react'


const Home = ({activador}) => {
  const Fb = 'https://github.com/Feishop23'
 
  return (
    <div className='Home'>
       <div className='homeFull'>
        <div className='Titulo'>{
          activador ? <h1>Este es mi portafolio</h1> : <h1>Welcome to my Portfolio.</h1>
        }
        </div>
        <div >
          {
            activador ? <p>Me presento soy <a className='HomeP' href={Fb} target='_blank'><b>Feiberth Portilla</b> </a> , Programador FullStack. Me gusta definirme por mis proyectos y mi forma de resolver los problemas de mis clientes</p> : <p>I am <a className='HomeP' href={Fb} target='_blank'><b>Feiberth Portilla</b> </a>, FullStack Programmer. I like to define myself by my projects and my way of solving my clients' problems.</p> 
          }
        </div>
       </div>
        </div>
  )
}

export default Home