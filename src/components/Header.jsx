import React from 'react'
import {useEffectApi} from "./hooks/useEffect"
import {  useColorModeValue} from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
export const Header = () => {
        const {onChange , handleOnSubmit,onChange2} = useEffectApi();
        const color = useColorModeValue('Black', 'green')
    return (
        <div className='titu'>
            <Text color={color} as='b'> Todo App</Text>
            <form
            onSubmit={handleOnSubmit}
            className='formu'>
            <Input 
            placeholder='Task' 
            type="text"
            className="btn-1" 
            name="useruno"
            onChange={onChange}
            required />
            <Input 
            placeholder='Description' 
            type="text"
            className="btn-1" 
            name="userdos"
            onChange={onChange2}>
            
            </Input>
            <Button type="submit" className='btn-2'>
                Send
            </Button>
            </form>
        </div>
    )  
}
