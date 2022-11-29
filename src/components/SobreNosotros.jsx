import React from 'react'
import'./css/sobre.css'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    } from '@chakra-ui/react'
    
    import { Text } from '@chakra-ui/react'
    import { Box } from '@chakra-ui/react'
    import {  useColorModeValue} from '@chakra-ui/react'
const SobreNosotros = () => {
    const bg = useColorModeValue('white', 'white')
    const color = useColorModeValue('green', 'black')
    return (
    
        <div className='cont'>
            <Box h='100%' bg={bg}>
            <div className='cont-texto-1'>
            <Text as='b' color={color}>Sobre Nosotros</Text>
            <h3 >Mi lista de Tarea</h3>
            <hr />
            <p >
            Mi producto es una herramienta que te va a permitir una mejor organizacion de tu tiempo y con ello permitir que el dia te rinda de la mejor manera y sea un poco mas productivo , ya sea en el ambito laboral , como en otros contextos de la vida cotidiana. 
            <br />
            Es un sistema que pretende ser interactivo con el usuario para asi
            facilitar la experiencia de el usuario con una interfaz agradable.
            </p>
        
    <Menu color={color}  >
        <MenuButton  color={color} >
        <Text color={color} as='b'> Cararteristicas que ofrece:</Text>
        </MenuButton>
        <MenuList>
            <MenuItem>Crear Tareas sin limites</MenuItem>
            <MenuItem>Buscar Tareas que hayas realizado</MenuItem>
            <MenuItem>Buscar Tareas que hayas realizado</MenuItem>
            <MenuItem>Eliminar tareas</MenuItem>
            <MenuItem>Y más Actualizaciones en el Furuto</MenuItem>
            <MenuItem>Lenguaje : Javascript</MenuItem>
            <MenuItem>Libreria : React</MenuItem>
            <MenuItem>Icon :Reac Icon</MenuItem>
    </MenuList>  
    </Menu>

        </div>
        <Text color={color} as='b'>   Desarrollador : Melany Martinez</Text>
        </Box>
        </div> 
    )
    }

export default SobreNosotros