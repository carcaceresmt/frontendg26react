import React,{useState} from 'react'
import Componente2 from './Componente2'
const Componente1 = () => {

    const [user,setUser]= useState("admin")
    const [rol,setRol] = useState("administrador")

    const cambiarRol=()=>{
        setUser("Carlos999")
        setRol("Digitador tipo Uno")

    }
    return (
        <div>
            
            <p>Usuario:{user}</p>
             <Componente2 usuario={user} rol={rol}>
            </Componente2>              
            
        </div>
    )
}

export default Componente1


