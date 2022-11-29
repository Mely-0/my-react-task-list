import { Input as Inputs } from '../components/Input'
import {  useColorModeValue} from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
export const TaskList = ({ tasks }) => {

    tasks = [];
    let obj
    for (const i in localStorage) {

        if(!isNaN(i) && i != "light" && i != "dark" ){
            console.log(i)
            obj = JSON.parse(localStorage[i]) 
            tasks.push({ nombre:obj.nombre, descri: obj.descri } )
        } 

    }



    const buscarid =( tarea )=>{
        for (const i in localStorage) {
            console.log(i)
            if(!isNaN(i) && i != "light" && i != "dark" ){
                if (JSON.parse(localStorage[i]).nombre == tarea){
                    return i
                }

            }

        }

    }
    const color = useColorModeValue('black', 'green') 

console.log(buscarid("1144") + "es este cv ");
    if (tasks.length === 0) {
        return (
            <div className='cont-not'>
            <Text color={color} as='b'> No hay tareas aun</Text>
            </div>
        )
    }

    return (
        <div className='contenido'>
            {tasks.map((task, id) => (
            
                <Inputs key={id}
                contenido={task.nombre}
                contenido2={task.descri}
                id={buscarid(task.nombre)}
                />
            ))}
        
        </div>
    )
}