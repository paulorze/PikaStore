import { useState } from "react"
import Home from "./Home"

const HomeContainer = () => {
    const [cantidadProductos, setCantidadProductos] = useState(0);
    const agregarProductos = () => {
        setCantidadProductos(cantidadProductos + 1)
    }
    return (
        <Home 
            funcion = {agregarProductos}
            cantidadProductos = {cantidadProductos}
        />
    )
}

export default HomeContainer