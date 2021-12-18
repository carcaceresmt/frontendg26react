import React from 'react'
import Guardar from '../compra/Guardar'
import Pedido from '../compra/Pedido'
import Contador from '../Contador'
import Page404 from './Page404'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"


const Menu = () => {
    return (
        <div>
            <Router>
                <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                    <a class="navbar-brand" href="#">Empresa XYZ</a>
                    <ul class="navbar-nav">
                    <li class="nav-item">
                            <a class="nav-link" href="/">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/guardar">Guardar Producto</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/pedido">Pedido Producto</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contador">Contador</a>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="*" element={<Page404></Page404>}></Route>
                    <Route path="/" element={<Pedido></Pedido>}></Route>
                    <Route path="/pedido" element={<Pedido></Pedido>}></Route>
                    <Route path="/guardar" element={<Guardar></Guardar>}></Route>
                    <Route path="/contador" element={<Contador></Contador>}></Route>
                </Routes>
            </Router>


        </div>
    )
}

export default Menu
