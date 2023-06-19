import { useTheme } from "@mui/material";
import { useState } from "react";
import NavBar from "./Navbar";

const NavBarContainer = ({cantidadProductos}) => {
    const theme = useTheme();
    const [openMenu,setOpenMenu] = useState(false)
    const abrirMenu = ()=> {
        setOpenMenu (!openMenu)
    }

    return (
        <NavBar 
            cantidadProductos = {cantidadProductos}
            abrirMenu = {abrirMenu}
            openMenu = {openMenu}
            theme = {theme}
        />
    )
}

export default NavBarContainer