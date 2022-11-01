import React from 'react'
import { useState } from 'react';
export const Header = ({createTask}) => {

    const[lista, setLista]= useState("")
    const headlerOnSubmit =(e)=>{
        let c = localStorage.length + 1
        e.preventDefault();
        createTask(lista)  
        localStorage.setItem( c , lista)
        window.location.reload();
    } 
    
    return (
        <div className='titu'>
            <h1 className='titu-h'>Todo App</h1>
            <form
            onSubmit={headlerOnSubmit}
            className='formu'>
            <input 
            placeholder='titulo' 
            type="text" 
            className="btn-1" 
            name="user_name"
            onChange={ (e)=>{
            setLista (e.target.value)
        
                }} />
                <input type="submit" className='btn-2' value="Enviar" />
            </form>
        </div>
    )
}
