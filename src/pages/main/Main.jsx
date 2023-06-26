import { themeDark, themeLight } from '../../themes';
import { ThemeProvider } from "@mui/material";
import NavBarContainer from "../../layout/navbar/NavBarContainer";

import FooterContainer from "../../layout/footer/FooterContainer";

const Main = ({theme, carrito, cambiarTema, renderPage, changePage}) => {
    return (
        <ThemeProvider
        theme={theme ? themeLight : themeDark}
        >
            <NavBarContainer
                carrito={carrito}
                cambiarTema = {cambiarTema}
                tema= {theme}
                changePage = {changePage}
            />
            {renderPage()}
            <FooterContainer
                changePage = {changePage}
            />
        </ThemeProvider>
    )
}

export default Main