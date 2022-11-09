
    export const handleOnClick = (id) => {
        
        localStorage.removeItem(id)
        window.location.reload();
    }

