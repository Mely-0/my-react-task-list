import React from 'react'
import'./css/sobre.css'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    } from '@chakra-ui/react'
    import { useColorMode , useColorModeValue} from '@chakra-ui/react'
const SobreNosotros = () => {

    const { toggleColorMode } = useColorMode()
    const color = useColorModeValue('black', 'black')
    return (
        <div className='cont'>
            <div className='cont-texto-1'>
        <h1>Sobre Nosotros</h1>
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
    Cararteristicas que ofrece:
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
        <h4 >
            Desarrollador : Melany Martinez
        </h4>
        </div>
    )
    }

export default SobreNosotros