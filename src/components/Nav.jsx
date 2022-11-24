import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {


  return (
    <div className='navegacion'>
      <Link to="/Home">Home</Link>
      <Link to="/Tareas">Tareas</Link>
      <Link to="/SobreNosotros">Sobre Nosotros</Link>
    </div>
    
  )
}

export default Nav