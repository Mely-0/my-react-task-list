import React from 'react'
import './css/styles.css';
import { Header } from './Header';
import { TaskList} from './TaskList';
import { tasks as data} from './tasks'
import { Footer } from './Footer';

import { useState,useEffect } from 'react';

    export const Index = () => {
    const[tasks,setTasks]=useState([]);

    useEffect(() => {
        
    setTasks(data)
    },[])

// function createTask(TaskLista){  
// setTasks ([...tasks,{
//     id:tasks.length,
//     lista:TaskLista
    
// }

// ])

// }
return (
    <div className='contenedor-promax'>
    <Header />
    <TaskList tasks={tasks}/>
    <Footer tasks={tasks}/> 
    </div>
)
}  
