import { Input as Inputs } from '../components/Input'

export const TaskList = ({ tasks }) => {

    tasks = [];

    for (const i in localStorage) {
        console.log(i)
        if(!isNaN(i))
        tasks.push(localStorage[i])
    }


    const buscarid =( tarea )=>{
        for (const i in localStorage) {
            if (localStorage[i] == tarea){
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
                contenido={task}
                id={buscarid(task)}
                />
            ))}
        </div>
    )
}
