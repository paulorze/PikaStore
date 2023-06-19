import { useState } from "react";
import NavBar from "./Navbar";

const NavBarContainer = ({cantidadProductos}) => {
    const [openMenu,setOpenMenu] = useState(false)
    const abrirMenu = ()=> {
        setOpenMenu (!openMenu)
    }
    return (
        <NavBar 
            cantidadProductos = {cantidadProductos}
            abrirMenu = {abrirMenu}
            openMenu = {openMenu}
        />
    )
}

export default NavBarContainer