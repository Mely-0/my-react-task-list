import React from 'react'
import './css/styles.css';
import { Header } from './Header';
import { TaskList} from './TaskList';
import { Footer } from './Footer';
export const Index = () => {
return (
    <div className='contenedor-promax'>
    <Header/>
    <TaskList/>
    <Footer/>
    </div>
)
}
