import { themeDark, themeLight } from '../../themes';
import { ThemeProvider } from "@mui/material";
import { useState } from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const NavBarContainer = () => {
    
    const [tema, setTema] = useState(true)
    const cambiarTema = ()=> {
        setTema(!tema)
    }

    const [carrito, setCarrito] = useState([]);
    const carritoAgregar = (producto,cantidad)=>{
        const data = {
            ...producto,
            quantity: cantidad
        };
        setCarrito(current => [...current, data]);
    };
    
    const [openMenu,setOpenMenu] = useState(false)
    const abrirMenu = ()=> {
        setOpenMenu (!openMenu)
    }

    return (
        <ThemeProvider
        theme={tema ? themeLight : themeDark}
        >
            <NavBar 
                carrito = {carrito}
                abrirMenu = {abrirMenu}
                openMenu = {openMenu}
                cambiarTema = {cambiarTema}
                tema= {tema}
            />
            <main>
                <Outlet/>
            </main>
        </ThemeProvider>
    )
}

export default NavBarContainer