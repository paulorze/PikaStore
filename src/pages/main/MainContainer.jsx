import { useState } from "react";
import HomeContainer from "../home/HomeContainer";
import StoreContainer from "../store/StoreContainer";
import Main from "./Main";
import TattooContainer from "../tattoo/TattooContainer";
import AboutContainer from "../about/AboutContainer";
import ContactoContainer from "../contacto/ContactoContainer";
import CartContainer from "../cart/CartContainer";



const MainContainer = () => {
    const [theme, setTheme] = useState(true)
    const cambiarTema = ()=> {
        setTheme(!theme)
    }

    const [carrito, setCarrito] = useState([]);
    const carritoAgregar = (producto,cantidad)=>{
        const data = {
            ...producto,
            quantity: cantidad
        };
        setCarrito(current => [...current, data]);
    };

    return (
        <Main
            theme={theme}
            carrito={carrito}
            cambiarTema={cambiarTema}
            renderPage={renderPage}
            changePage = {changePage}
        />
    )
}

export default MainContainer