//EDITAR

import { useEffect, useState } from "react"

export const useEdit = (id) => {

    const[lista2, setLista2]= useState("")
    const[descripcion2, setDescripcion2]= useState("")
    

    const handleOnSubmit2=()=>{


        if(lista2.length < 3 || descripcion2.length < 3){
            alert("no acepto valores menores de 3 caracteres")
        }else{
            localStorage.setItem( id, JSON.stringify({nombre:lista2, descri: descripcion2 }) )  
        }
    }
    
    const onChange =(e)=>{
        setLista2(e.target.value)
    }

    const onChangeDos =(e)=>{
        setDescripcion2(e.target.value)
    }
    return {handleOnSubmit2, onChange, onChangeDos}

} 



