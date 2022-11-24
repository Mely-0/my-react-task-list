import { Input as Inputs } from '../components/Input'

export const TaskList = ({ tasks }) => {

    tasks = [];
    let obj
    for (const i in localStorage) {
        console.log(i)
        if(!isNaN(i)){
            obj = JSON.parse(localStorage[i]) 
            tasks.push({ nombre:obj.nombre, descri: obj.descri } )
        }

    }



    const buscarid =( tarea )=>{
        for (const i in localStorage) {
            if (JSON.parse(localStorage[i]).nombre == tarea){
                return i
            }
        }

    }


    if (tasks.length === 0) {
        return (
            <div className='cont-not'>
            <h4 className='not-task'>no hay tareas aun</h4>
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