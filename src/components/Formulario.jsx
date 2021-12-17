import React, { useState } from 'react'
import '../assets/css/form.css'

const Formulario = () => {

    const [nombre, setNombre] = useState("")
    const [estudio, setEstudio] = useState("")

    const guardarDatos = (e) => {
        e.preventDefault()
        localStorage.setItem("nombre", nombre)
        localStorage.setItem("estudio", estudio)
    }

    const mostrarDatos = () => {
        if (localStorage.getItem("nombre") === null || localStorage.getItem("estudio") === null) {
            alert("Nombre o Estudio No se Han Creado en Localstorage")
        }
        else {
            let nombredato = localStorage.getItem("nombre")
            let estudiodato = localStorage.getItem("estudio")
            alert(`Nombre:${nombredato} Estudio:${estudiodato}`)
        }
    }

    const eliminarNombre = () => {
        if (localStorage.getItem("nombre") === null) {
            alert("Nombre  No se Han Creado en Localstorage")
        }
        else {
            localStorage.removeItem("nombre")
        }
    }

    const eliminarEstudio = () => {
        if (localStorage.getItem("estudio") === null) {
            alert("Estudio No se Han Creado en Localstorage")
        }
        else {
            localStorage.removeItem("estudio")
        }
    }


    const eliminarTodo = () => {
        if (localStorage.getItem("nombre") === null || localStorage.getItem("estudio") === null) {
            alert("Nombre o Estudio No se Han Creado en Localstorage")
        }
        else {
            localStorage.clear()
        }
    }


    return (
        <div className="forms jumbotron">

            <form onSubmit={guardarDatos}>
                <h1 className="text-center mb-3">Datos de Persona</h1>
                <label><strong>Nombres y Apellidos</strong></label>
                <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <label className="mt-1"><strong>Estudio</strong></label>
                <select className="form-control " value={estudio} onChange={(e) => setEstudio(e.target.value)}>
                    <option value="Sin Estudio">Sin Estudio</option>
                    <option value="Primaria">Primaria</option>
                    <option value="Secundaria">Secundaria</option>
                    <option value="Tecnico">Tecnico</option>
                    <option value="Tecnologo">Tecnologo</option>
                    <option value="Profesional">Profesional</option>
                    <option value="Postgrado">Postgrado</option>
                </select>
                <div className="text-center">
                    <button className="btn btn-primary mt-3">Guardar</button>
                </div>
                <div>
                    <h1 className="text-center">Datos Personas</h1>
                    <p>Nombre:{nombre}</p>
                    <p>Estudio:{estudio}</p>
                </div>
            </form>

            <button className="btn btn-success btn-block" onClick={mostrarDatos}>Mostrar</button>
            <button className="btn btn-danger btn-block" onClick={eliminarNombre}>Eliminar Nombre</button>
            <button className="btn btn-danger btn-block" onClick={eliminarEstudio}>Eliminar Estudio</button>
            <button className="btn btn-danger btn-block" onClick={eliminarTodo}>Eliminar Todos los Elementos</button>

        </div>
    )
}

export default Formulario
