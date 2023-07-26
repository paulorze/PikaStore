import { useState } from "react";
import NavBar from "./NavBar";

const NavBarContainer = ({cambiarTema, tema}) => {
    
    const [openMenu,setOpenMenu] = useState(false)
    const abrirMenu = ()=> {
        setOpenMenu (!openMenu)
    }

    return (
        <NavBar 
            abrirMenu = {abrirMenu}
            openMenu = {openMenu}
            cambiarTema = {cambiarTema}
            tema= {tema}
        />
    )
}

export default NavBarContainer