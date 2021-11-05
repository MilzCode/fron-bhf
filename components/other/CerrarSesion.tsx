import router from 'next/router';
import React from 'react'
import Logout from '../../hooks/useLogout';

const CerrarSesion = () => {
    
    
    const handleButton =() =>{
       Logout().
        then(data =>{
            const msj = data.mensaje;
            if(msj === 'Salió con exito'){
                console.log('Se hizo bien el llamado');
                localStorage.removeItem('token');
                router.push('/');
                
            }else{
                console.error(data);
            }
        });
        
    }

    return (
        <>
          <button onClick={handleButton} className="BOTON BACKGROUNDCOLORRED button__logout">CERRAR SESIÓN</button>  
        </>
    )
}

export default CerrarSesion
