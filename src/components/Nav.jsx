import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Center } from '@chakra-ui/react'
import { useColorMode , useColorModeValue} from '@chakra-ui/react'
import { Button } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
const Nav = () => {

  const {colorMode, toggleColorMode } = useColorMode()

  const bg = useColorModeValue('green.100', 'green.200')
  const color = useColorModeValue('black', 'white')

  
  return (

      <Box bg={bg} color={color}  w='100%' p={4} h='10%'>   
        <Link to="/Home"> 
        <Text  ml='20px' as='b'>Home</Text>
        </Link>
        <Link to="/Tareas">
        <Text ml='20px'  as='b'>Tareas</Text>
        </Link>
        <Link to="/SobreNosotros">
        <Text  ml='20px'  as='b'>Sobre Nosotros</Text>
        </Link>
        <Center>
      <Button ml='90%' onClick={toggleColorMode} >
      {colorMode === 'light' ? '🌙' : '☀️'}
      </Button>
      </Center>
      </Box>
  
  )
}

export default Nav