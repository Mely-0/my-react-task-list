import React from 'react'
import {useEffectApi} from "./hooks/useEffect"
import { useState } from 'react'

export const Header = () => {
        const {onChange , handleOnSubmit,onChange2} = useEffectApi();
    return (
        <div className='titu'>
            <h1 className='titu-h'>Todo App</h1>
            <form
            onSubmit={handleOnSubmit}
            className='formu'>
            <input 
            placeholder='Task' 
            type="text"
            className="btn-1" 
            name="useruno"
            onChange={onChange}
            required />
            <input 
            placeholder='Description' 
            type="text"
            className="btn-1" 
            name="userdos"
            onChange={onChange2}>
            
            </input>
            
            <input type="submit" className='btn-2' value="Send" />
            </form>
        </div>
    )  
}
