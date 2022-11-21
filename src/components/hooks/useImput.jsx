//ELIMINAR
    export const handleOnClick = (id) => {
        alert("hola")

        localStorage.removeItem(id)
        window.location.reload();
    }

