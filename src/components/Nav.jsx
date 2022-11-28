import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import { useColorMode , useColorModeValue} from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue('green.200', 'green.500')
  const color = useColorModeValue('black', 'black')
  return (
    <div className='navegacion'>
      <Box bg={bg} color={color} w='100%' p={4}>   
        <Link to="/Home"> Home </Link>
        <Link to="/Tareas">Tareas </Link>
        <Link to="/SobreNosotros">Sobre Nosotros </Link>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? '☀️' : '🌙'}
      </Button>
      </Box>
    </div>
  )
}

export default Nav