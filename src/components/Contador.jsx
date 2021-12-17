import React, { Fragment, useState } from 'react'
import logoreact from '../assets/img/react.png'
import '../assets/css/style.css'

const Contador = () => {

    const [numero,setNumero]=useState(1)

    const aumentar=()=>{
        setNumero(numero+1)
    }
    const disminuir=()=>{
        setNumero(numero-1)
    }

    return (
        <Fragment>
            <div className="contenedor">
                <img src={logoreact} alt="logoreact"/>
                <p className="titulo">Numero: {numero}</p>
                <button className="boton botonizq" onClick={aumentar}>+</button>
                <button className="boton botonder" onClick={disminuir}>-</button>
            </div>
        </Fragment>

    )
}

export default Contador
