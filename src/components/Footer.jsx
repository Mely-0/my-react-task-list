import React from 'react'
import { useState } from 'react'

export const Footer = (props) => {
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
