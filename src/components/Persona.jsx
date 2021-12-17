import React, { useState, Fragment } from 'react'

const Persona = () => {
    /**
     * estados de componente
     */
    const [nombre,setNombre]=useState("carlos")
    const [cambio,setCambio]=useState("Mi Nombre Actual")
    const [edad,setEdad]=useState(42)

    return (
        <Fragment>
            <div>
                {/**
                 * template del componente               
                 *                
                 */}
                
                <p>{cambio}{nombre} y mi edad es  {edad}</p>
                <button onClick={(e)=>{
                        setNombre("juan")
                        setCambio("Me cambie el Nombre a ")
                        setEdad(18)
                        console.log(`Me cambie el Nombre a ${nombre}`)
                }}>Mostrar</button>
            </div>
        </Fragment>
    )
}

export default Persona