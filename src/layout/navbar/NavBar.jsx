import { Grid, IconButton, useTheme } from "@mui/material";
import Drawer from '@mui/material/Drawer';
import CartWidgetContainer from "../../common/cartWidget/CartWidgetContainer";
import MenuIcon from '@mui/icons-material/Menu';
import ThemeToggle from "../../common/themeToggle/ThemeToggle";
import { Link } from "react-router-dom";
import './NavBar.css';



const NavBar = ({carrito, abrirMenu, openMenu, cambiarTema, tema}) => {
    const theme = useTheme();
    

    return (
        <header style={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.fuente.main
        }}>
            <Grid container spacing={1}>
                <Grid 
                    item xs={5} 
                    md={2} 
                    className="header__logo"
                    order={{
                        xs:1,
                        md: 0
                    }}
                >
                    <Link
                        to={'/'}
                    >
                        <IconButton>
                            <img src="https://res.cloudinary.com/dsvffdexj/image/upload/v1687093670/pika-logo_tbebug.png" alt="Pika logo" className="header__logo__img"/>
                        </IconButton>
                    </Link>
                </Grid>
                <Grid item sx = {{
                    display: {xs: 'none', md: 'flex'}
                }} md={8}>
                    <nav className="header__nav">
                    <ul>
                        <li>
                            <Link
                                to={'/'}
                                className="link"
                                style={{
                                    color: theme.palette.fuente.main
                                }}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/tattoo'}
                                className="link"
                                style={{
                                    color: theme.palette.fuente.main
                                }}
                            >
                                Tattoo
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/store'}
                                className="link"
                                style={{
                                    color: theme.palette.fuente.main
                                }}
                            >
                                Store
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/about'}
                                className="link"
                                style={{
                                    color: theme.palette.fuente.main
                                }}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/contacto'}
                                className="link"
                                style={{
                                    color: theme.palette.fuente.main
                                }}
                            >
                                Contacto
                            </Link>
                        </li>
                    </ul>
                    </nav>
                </Grid>
                <Grid 
                    item xs={3} 
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
                        <li>
                            <Link
                                to={'/'}
                                onClick = {abrirMenu}
                                className="link"
                                style={{
                                    color: theme.palette.fuente.main
                                }}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/tattoo'}
                                onClick = {abrirMenu}
                                className="link"
                                style={{
                                    color: theme.palette.fuente.main
                                }}
                            >
                                Tattoo
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/store'}
                                onClick = {abrirMenu}
                                className="link"
                                style={{
                                    color: theme.palette.fuente.main
                                }}
                            >
                                Store
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/about'}
                                onClick = {abrirMenu}
                                className="link"
                                style={{
                                    color: theme.palette.fuente.main
                                }}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/contacto'}
                                onClick = {abrirMenu}
                                className="link"
                                style={{
                                    color: theme.palette.fuente.main
                                }}
                            >
                                Contacto
                            </Link>
                        </li>
                        </ul>
                    </nav>
            </Drawer>
        </header>
    )
}

export default NavBar