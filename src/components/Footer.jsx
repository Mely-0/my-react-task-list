import React from 'react'
import { useState } from 'react'

export const Footer = () => {
    const[estado3, setEstado3]= useState(false)

const handleDelete=(e)=>{
    console.log(e);
if(estado3){
    setEstado3(false)
    
}else{
    setEstado3(true)
    localStorage.clear();
    window.location.reload();
}
}

return (
        <div className='cont-footer'>
            <h3 className='parrafo'>You have {localStorage.length}  peding tasks</h3>
            <button 
            onClick={handleDelete}
            checked={estado3}
            className='btn-3' 
            type="button" 
            name="boton7" 
            > Clear All
            </button>
        </div>
)
}
