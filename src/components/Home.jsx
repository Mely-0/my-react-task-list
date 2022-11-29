import React from 'react'
import './css/Home.css'
import { useState } from 'react';
import {  useColorModeValue} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
const Home = () => {
const[nombre,setNombre]=useState("")
const onSubmit=(e)=>{
e.preventDefault()
setNombre( e.target.user.value);
e.target.user.value="";
};
const color = useColorModeValue('white', 'black')
return (
    <div  className='contenedor-pro'>
    <form className='formula' onSubmit={onSubmit}>
    <Input h='100%' className='nombre' type="text" placeholder='Introduzca su nombre' name='user'  />
    <button className='boton'>Click</button>
    </form>
    <Text color={color} as='b'> bienvenido {nombre}</Text>
    </div>
)
}

export default Home