import React from 'react'
import { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";


export const Input = (props) => {
    const { contenido } = props;

    const [marcado, setMarcado] = useState(false)
    const [claseLabel, setClaseLabel] = useState("label")
    const [claseCont, setClaseCont] = useState("cont-label")

    const tareaHecha = (e) => {
        console.log(e)
        if (marcado) {
            setClaseLabel("label")
            setMarcado(false)
            setClaseCont("cont-label")
        } else {

            setClaseLabel("Label-underline")
            setMarcado(true)
            setClaseCont("cont-label-1")
        }
    }
    const [abrir, setAbrir]= useState(false);
    const [claseTitulo, setClasdeTitulo]= useState("estado");

    const handleOpen= (e)=>{
        console.log(e)  
        if (abrir) {
            setAbrir(false)
            setClasdeTitulo("estado")
        } else {
            setAbrir(true)
            setClasdeTitulo("new-estado")
        }
    }
    const handleOnClick=(e)=>{
       console.log(e)
   // alert(props.id)
        localStorage.removeItem(props.id)
        window.location.reload();
    }
    return (
        <div className={claseCont}>
        <label className={claseLabel}>
            <input type="checkbox"
                onClick={handleOpen}
                checked={marcado}
                onChange={tareaHecha}
                className='checkbox-round' value="first_checkbox" />
                {contenido}
                <button
                onClick={handleOnClick}
                className='iconos'>
                <FaTrashAlt />
                </button>
        </label>
        <div className='mensaje'>
            {abrir ? <h5 className={claseTitulo}> Tarea realizada </h5> : null}
        </div>
    </div>
    )
}
