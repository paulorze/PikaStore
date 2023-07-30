import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import NavBar from "./NavBar";
import { ThemeProviderContext } from "../../context/ThemeProviderContext";

const NavBarContainer = () => {
    const {temaClaro, cambiarTema} = useContext(ThemeProviderContext)
    const {theme} = useContext(ThemeContext)
    const [openMenu,setOpenMenu] = useState(false)
    const abrirMenu = ()=> {
        setOpenMenu (!openMenu)
    }

    return (
        <NavBar 
            abrirMenu = {abrirMenu}
            openMenu = {openMenu}
            cambiarTema = {cambiarTema}
            temaClaro= {temaClaro}
            theme = {theme}
        />
    )
}

export default NavBarContainer