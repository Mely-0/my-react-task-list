import { useState } from "react"

export const useEdit = (id) => {
    const[lista2, setLista2]= useState("")

    const handleOnSubmit2=(e)=>{
        localStorage.setItem( e , lista2)
        
    }
    const onChange =(e)=>{
        setLista2(e.target.value)
    }
    return {handleOnSubmit2, onChange}
} 



