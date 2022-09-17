import React from 'react'


const Home = ({active}) => {
  const Fb = 'https://github.com/Feishop23'

  return (
    <div className='Home'>
       <div className='homeFull'>
        <div className='Titulo'>
           <h1>
           Welcome to my Portfolio.
           </h1>
        </div>

        <div >
          <p>
          I introduce myself <a className='HomeP' href={Fb} target='_blank'><b>Feiberth Portilla</b> </a>, FullStack Programmer. I like to define myself by my projects and my way of solving my clients' problems.
          </p>
        </div>
       </div>
        </div>
  )
}

export default Home