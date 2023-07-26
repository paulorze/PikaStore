import { useState } from "react";
import { Outlet } from "react-router-dom"
import { ThemeProvider, useTheme} from "@mui/material";
import FooterContainer from "./footer/FooterContainer"
import NavBarContainer from "./navbar/NavBarContainer"
import { themeDark, themeLight } from '../themes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
    
    const [tema, setTema] = useState(true)
    const cambiarTema = ()=> {
        setTema(!tema)
    }

    const theme = useTheme()

    return (
        <ThemeProvider
            theme={tema ? themeLight : themeDark}
        >
            <NavBarContainer 
                cambiarTema = {cambiarTema}
                tema = {tema}
            />
            <Outlet/>
            <FooterContainer/>
            <ToastContainer />
        </ThemeProvider>
    )
}

export default Layout