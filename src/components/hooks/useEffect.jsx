//AGREGAR 
import { useState,useEffect} from "react";

export const useEffectApi = () => {
    const[lista, setLista]= useState("")

    const[descripcion, setDescripcion]= useState("")


        
    const handleOnSubmit=(e)=>{ 


        if(lista.length < 3 || descripcion.length < 3){
            alert("no acepto valores menores de 3 caracteres")
        }else{
            let c = localStorage.length + 1
            e.preventDefault(); 
            localStorage.setItem( c , JSON.stringify({nombre:lista, descri: descripcion }) )
            window.location.reload();   
        }
    }
    const onChange =(e)=>{
        setLista(e.target.value)
    }
    const onChange2 =(e)=>{
        setDescripcion(e.target.value)
    }
    return {handleOnSubmit, onChange,onChange2}
} 

