import React from 'react'
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
export const Input = (props) => {
    const {contenido}= props;
return (

    <label className='label'><input type="radio" className='checkbox-round'value="first_checkbox"/> {contenido} 
    <div className='iconos'>
    <FaEdit/>
    <FaTrashAlt/> 
    </div>
    </label>
    
    
)
}
