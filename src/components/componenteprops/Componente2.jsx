import React from 'react'
import Componente3 from './Componente3'
const Componente2 = (props) => {
    return (
        <div>
            <p>Componente 2</p>
            <p>Usuario:{props.usuario}</p>
            <p>Rol:{props.rol}</p>
            <Componente3 usuario={props.usuario} 
            rol={props.rol}>                
            </Componente3>
        </div>
    )
}

export default Componente2
