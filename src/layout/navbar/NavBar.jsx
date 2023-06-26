import { Grid, IconButton } from "@mui/material";
import Drawer from '@mui/material/Drawer';
import CartWidgetContainer from "../../common/cartWidget/CartWidgetContainer";
import MenuIcon from '@mui/icons-material/Menu';

import ThemeToggle from "../../common/themeToggle/ThemeToggle";
import './NavBar.css';



const NavBar = ({carrito, abrirMenu, openMenu, theme, cambiarTema, tema, changePage}) => {
    return (
        <header style={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.fuente.main
        }}>
            <Grid container spacing={1}>
                <Grid 
                    item xs={4} 
                    md={2} 
                    className="header__logo"
                    order={{
                        xs:1,
                        md: 0
                    }}
                >
                    <IconButton>
                        <img src="https://res.cloudinary.com/dsvffdexj/image/upload/v1687093670/pika-logo_tbebug.png" alt="Pika logo" className="header__logo__img"/>
                    </IconButton>
                </Grid>
                <Grid item sx = {{
                    display: {xs: 'none', md: 'flex'}
                }} md={8}>
                    <nav className="header__nav">
                    <ul>
                        <li
                            onClick={()=>{changePage('home')}}
                        >
                            Home
                        </li>
                        <li
                            onClick={()=>{changePage('tattoo')}}
                        >
                            Tattoo
                        </li>
                        <li
                            onClick={()=>{changePage('store')}}
                        >
                            Store
                        </li>
                        <li
                            onClick={()=>{changePage('about')}}
                        >
                            About
                        </li>
                        <li
                            onClick={()=>{changePage('contacto')}}
                        >
                            Contacto
                        </li>
                    </ul>
                    </nav>
                </Grid>
                <Grid 
                    item xs={4} 
                    className="header__menu" 
                    onClick = {abrirMenu} 
                    sx = {{
                    display: {md: 'none'}
                    }}
                >
                    <IconButton>
                        <MenuIcon
                            className="header__menu__icono"  
                        />
                    </IconButton>
                </Grid>
                <Grid
                    item xs={2} 
                    md={1} 
                    order={{xs:2}}
                    className="header__toggleTheme"
                >
                    <ThemeToggle
                        cambiarTema={cambiarTema}
                        tema = {tema}
                        className = 'header__toggleTheme__icon'
                    />
                </Grid>
                <Grid 
                    item xs={2} 
                    md={1} 
                    order={{xs:2}} 
                    className="header__cartWidget"
                >
                    <CartWidgetContainer 
                        cantidadProducto = {carrito.length} 
                        className="header__cartWidget__icon"
                        changePage = {changePage}
                    />
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
                            <li
                                onClick={()=>{changePage('home')}}
                            >
                                Home
                            </li>
                            <li
                            onClick={()=>{changePage('tattoo')}}
                            >
                                Tattoo
                            </li>
                            <li
                                onClick={()=>{changePage('store')}}
                            >
                                Store
                            </li>
                            <li
                                onClick={()=>{changePage('about')}}
                            >
                                About Us
                            </li>
                            <li
                                onClick={()=>{changePage('contacto')}}
                            >
                                Contacto
                            </li>
                        </ul>
                    </nav>
            </Drawer>
        </header>
    )
}

export default NavBar