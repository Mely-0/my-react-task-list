import React from 'react'
import {useEffectApi} from "./hooks/useEffect"



export const Header = () => {
        const {onChange , handleOnSubmit} = useEffectApi();
    return (
        <div className='titu'>
            <h1 className='titu-h'>Todo App</h1>
            <form
            onSubmit={handleOnSubmit}
            className='formu'>
            <input 
            placeholder='titulo' 
            type="text"
            className="btn-1" 
            name="user_name"
            onChange={onChange} />
                <input type="submit" className='btn-2' value="Enviar" />
            </form>
        </div>
    )  
}
