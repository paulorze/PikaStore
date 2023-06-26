import { useTheme } from "@mui/material";
import { useState } from "react";
import NavBar from "./NavBar";

const NavBarContainer = ({carrito, cambiarTema, tema, changePage}) => {
    const theme = useTheme();
    const [openMenu,setOpenMenu] = useState(false)
    const abrirMenu = ()=> {
        setOpenMenu (!openMenu)
    }

    return (
        <NavBar 
            carrito = {carrito}
            abrirMenu = {abrirMenu}
            openMenu = {openMenu}
            theme = {theme}
            cambiarTema = {cambiarTema}
            tema= {tema}
            changePage = {changePage}
        />
    )
}

export default NavBarContainer