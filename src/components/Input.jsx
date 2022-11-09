import React from 'react'
import { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import {FaRegEdit}from "react-icons/fa";
import {handleOnClick} from "./hooks/useImput";
import {useEdit} from "./hooks/useEdit";

// import { handleOnClick } from ""

export const Input = (props) => {
    const { contenido } = props;
    const {id}= props;

//VARIABLES DE ESTADO
    const [marcado, setMarcado] = useState(false)
    const [claseLabel, setClaseLabel] = useState("label")
    const [claseCont, setClaseCont] = useState("cont-label")

// SUBRAYAR LA TAREA
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
    // CAMBIAR DE ESTADO LAS TAREAS
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
    
    // const handleOnClick = useEffectApi2()
    //EDITAR
    const {onChange , handleOnSubmit2} = useEdit();
    //VARIABLES DE EATDOS PARA EL INPUT ALTERNO

    const[ presionado, setPresionado]= useState(false);
    const [claseTitulo2, setClasdeTitulo2]= useState("estado2");

    const handleOpen2 = (e)=>{
        console.log(e)

        if(presionado){
        setPresionado(false)
        setClasdeTitulo2("estado2")
        }else{
            setPresionado(true) 
            setClasdeTitulo2("estado2-input")
        }

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
                onClick={() => handleOnClick(id)}
                className='iconos'>
                <FaTrashAlt />
                </button>
                <button
                checked= {presionado}
                onClick= {handleOpen2}
                className='iconos'>
                <FaRegEdit />
                </button>
        </label>
        <div className='mensaje'>
            {abrir ? <h5 className={claseTitulo}> Tarea realizada </h5> : null}
        </div>
        {presionado ?<form 
        onSubmit={()=>handleOnSubmit2(id)}
        className='mensaje2'>
    
            <input 
            placeholder='new taks' 
            type="text" 
            className={claseTitulo2} 
            name="user_name"
            onChange={ onChange} 

            /> 
    
        <input
        type="submit" 
        className='btn'
        value="Enviar"
        
        />
        </form>: null} 
    </div>
    )
}
