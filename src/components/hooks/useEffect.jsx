import { useState} from "react";

export const useEffectApi = () => {
    const[lista, setLista]= useState("")

    const handleOnSubmit=(e)=>{

    let c = localStorage.length + 1
        e.preventDefault(); 
        localStorage.setItem( c , lista)
        window.location.reload();    
    }
    const onChange =(e)=>{
        setLista(e.target.value)
    }
    return {handleOnSubmit, onChange}
} 

    
    
