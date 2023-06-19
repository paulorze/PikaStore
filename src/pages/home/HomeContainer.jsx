import { useState } from "react"
import Home from "./Home"

const HomeContainer = ({cambiarTema, tema}) => {
    const [cantidadProductos, setCantidadProductos] = useState(0);
    const agregarProductos = () => {
        setCantidadProductos(cantidadProductos + 1)
    }
    return (
        <Home 
            funcion = {agregarProductos}
            cantidadProductos = {cantidadProductos}
            cambiarTema = {cambiarTema}
            tema = {tema}
        />
    )
}

export default HomeContainer