import React,{useEffect,useState} from 'react'

const Efecto = () => {

    const [nombre,setNombre]=useState("")
    const [visible,setVisible] =useState(0)

    useEffect(()=>{
        console.log("Activo UseEffect por cambio de estado")
        if(nombre.length>0){
            setVisible(1)
        }
        else{
            setVisible(0)
        }
    },[nombre])



    return (
        <div>
            <input type="text" onChange={(e)=>{setNombre(e.target.value)}} />
            <p>Nombre:{nombre}</p>
            <p>Visible:{visible}</p>
            {
                visible===0 && <p class="text-danger">Campo Vacio!!</p>
            }
        </div>
    )
}

export default Efecto



