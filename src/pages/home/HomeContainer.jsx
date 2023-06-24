import Home from "./Home"

const HomeContainer = ({carrito, carritoAgregar, cambiarTema, tema}) => {
    return (
        <Home
            carrito = {carrito}
            carritoAgregar = {carritoAgregar}
            cambiarTema = {cambiarTema}
            tema = {tema}
        />
    )
}

export default HomeContainer