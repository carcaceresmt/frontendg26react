import React, { useEffect, useState } from 'react'
import { consumirApiProductoGet } from '../../assets/js/api'

const Pedido = () => {

    /**
     * estados
     */
    const [data, setData] = useState([])
    const [cantidad, setCantidad] = useState(0)
    const [pedido, setPedido] = useState([])
    const [total, setTotal] = useState(0)

    /**
     * funcion agregar producto
     */

    const agregar = (producto) => {
        if (cantidad === 0) {
            alert("Digite la Cantidad de Producto a Comprar")
        }
        else if (cantidad > producto.stock) {
            alert("Excede el Stock")
        }
        else {
            const array = pedido
            if (validar(producto, array) === 0) {

                const objetoProducto = {

                    id: producto.id,
                    nomprod: producto.nomprod,
                    precio: producto.precio,
                    cantidad: cantidad,
                    descripcion: producto.descripcion,
                    subtotal: cantidad * producto.precio
                }
                array.push(objetoProducto)
                localStorage.setItem("carrito", JSON.stringify(array))
                setPedido(JSON.parse(localStorage.getItem("carrito")))
                calculoTotal(array)
            }
            else {
                alert("Producto se Encuentra Agregado")
            }
        }
    }

    /**
     * validar existe producto
     */

    const validar = (producto, array) => {

        let cont = 0
        array.forEach(elemento => {
            if (producto.id === elemento.id) {
                cont++
            }

        });
        return cont
    }

    /**
     * calcular el total del pedido
     */

    const calculoTotal=(array)=>{
        let totalpagar=0
        array.forEach(element=>{
            totalpagar+=element.subtotal
        })
        setTotal(totalpagar)
        localStorage.setItem("total",totalpagar)
    }


    /**
     * remover pedido
     */

    const remover=(index)=>{

        let array=pedido
        if(index>0){
            array.splice(index,1)
        }
        else{
            array.pop()
        }       

        localStorage.setItem("carrito",JSON.stringify(array))
        setPedido(JSON.parse(localStorage.getItem("carrito")))
        calculoTotal(array)

    }


    /**efectos */
    useEffect(() => {

        const resp = consumirApiProductoGet()
        resp
            .then(data => {

                setData(data.data)
                console.log(data.data)
            })
            .catch(e => {
                console.log("Error en consumir Api")
            })

        if (localStorage.getItem("carrito") != null) {
            setPedido(JSON.parse(localStorage.getItem("carrito")))
        }

        if (localStorage.getItem("total") != null) {
            setTotal(localStorage.getItem("total"))
        }


    }, [])


    return (
        <div className="container mt-5">
            <h1 className="text-center mb-5">Lista de Producto</h1>

            <table className="table table-striped text-center">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Descripción</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data.map(producto =>

                            <tr key={producto.id}>
                                <td>{producto.id}</td>
                                <td>{producto.nomprod}</td>
                                <td>$ {new Intl.NumberFormat("de-DE").format(producto.precio)}</td>
                                <td>
                                    <input type="number" id={`id${producto.id}`} name={`id${producto.id}`}
                                        onClick={(e) => { setCantidad(e.target.value) }}
                                        onChange={(e) => { setCantidad(e.target.value) }}
                                    />
                                </td>
                                <td>{producto.descripcion}</td>
                                <td><button className="btn btn-success" onClick={() => { agregar(producto) }}>Agregar</button></td>

                            </tr>

                        )
                    }

                </tbody>

            </table>

            {
                /**
                 * tabla pedido
                 */

            }
            {pedido.length > 0 ?
                <div>
                    <h1 className="text-center mb-5">Pedido</h1>

                    <table className="table table-striped text-center">
                        <thead>
                            <tr>
                                <th>
                                    Id
                                </th>
                                <th>
                                    Producto
                                </th>
                                <th>
                                    Precio
                                </th>
                                <th>
                                    Cantidad
                                </th>
                                <th>
                                    Descripción
                                </th>
                                <th>
                                    Subtotal
                                </th>
                                <th>
                                    Pedido
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                pedido.map((item, index) =>
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.nomprod}</td>
                                        <td>$ {new Intl.NumberFormat("de-DE").format(item.precio)}</td>
                                        <td>{item.cantidad}</td>
                                        <td>{item.descripcion}</td>
                                        <td>$ {new Intl.NumberFormat("de-DE").format(item.subtotal)}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={(e)=>{remover(index)}}>
                                                Remover
                                            </button>
                                        </td>
                                    </tr>
                                )

                            }
                        </tbody>
                    </table>
                    <hr className="mt-5"/>
                    <h1 className="text-right">Total a Pagar:{total}</h1>
                </div>
                :
                <div className="alert alert-info">
                <p><strong>Info!</strong> No tienes Pedidos.</p>
              </div>

            }

        </div>
    )
}

export default Pedido


