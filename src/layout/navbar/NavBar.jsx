import { Grid } from "@mui/material";
import Drawer from '@mui/material/Drawer';
import CartWidgetContainer from "../../common/cartWidget/CartWidgetContainer";
import HambMenu from "../../common/hambMenu/HambMenu";
import './NavBar.css';

const NavBar = ({cantidadProductos, abrirMenu, openMenu}) => {
    return (
        <header>
            <Grid container spacing={1}>
                <Grid item xs={4} md={2} className="header__logo">
                        <img src="https://res.cloudinary.com/dsvffdexj/image/upload/v1687093670/pika-logo_tbebug.png" alt="Pika logo" className="header__logo__img"/>
                </Grid>
                <Grid item sx = {{
                    display: {xs: 'none', md: 'flex'}
                }} md={8}>
                    <nav className="header__nav">
                        <ul>
                            <li>Home</li>
                            <li>Store</li>
                            <li>About Us</li>
                            <li>Contacto</li>
                        </ul>
                    </nav>
                </Grid>
                <Grid item xs={4} className="header__menu" onClick = {abrirMenu} sx = {{
                    display: {md: 'none'}
                }}>
                    <HambMenu className="header__menu__icono"  />
                </Grid>
                <Grid item xs={4} md={2} order={{xs:1}} className="header__cartWidget">
                    <CartWidgetContainer cantidadProductos = {cantidadProductos} className="header__cartWidget__logo"/>
                </Grid>
            </Grid>
            <Drawer 
                    anchor="left"
                    open = {openMenu}
                    onClose={abrirMenu}
                    className="drawer"
                >
                    <nav className="drawer__nav">
                        <ul>
                            <li>Home</li>
                            <li>Store</li>
                            <li>About Us</li>
                            <li>Contacto</li>
                        </ul>
                    </nav>
                </Drawer>
        </header>
    )
}

export default NavBar