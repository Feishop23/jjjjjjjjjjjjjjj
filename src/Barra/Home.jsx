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
          I introduce myself <a className='HomeP' href={Fb} target='_blank'><b>Feiberth Portilla</b> </a>, FullStack Programmer.
          I don't like to define myself by my projects. I define myself by my way of solving problems.
          </p>
        </div>
       </div>
        </div>
  )
}

export default Home