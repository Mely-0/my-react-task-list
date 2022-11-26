import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
const Nav = () => {


  return (
    <div className='navegacion'>
      <Box bg='green' w='100%' p={4} color='white'>      
        <Link to="/Home">Home</Link>
        <Link to="/Tareas">Tareas</Link>
        <Link to="/SobreNosotros">Sobre Nosotros</Link>
      </Box>
      
    </div>
  )
}

export default Nav