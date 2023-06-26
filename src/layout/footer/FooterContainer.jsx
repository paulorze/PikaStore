import { Grid, IconButton, useTheme } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FreeBreakfastOutlinedIcon from '@mui/icons-material/FreeBreakfastOutlined';
import './Footer.css';

const FooterContainer = ({changePage}) => {
    const theme = useTheme();

    return (
        <footer 
            style={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.fuente.main
            }}
        >
            <Grid 
                container 
                spacing={1}
            >
                <Grid 
                    item 
                    xs={12} 
                    md={4} 
                    className="footer__menu" 
                    style={{
                        flexDirection : 'column'
                    }}
                >
                    <h4>
                        Menú
                    </h4>
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
                </Grid>
                <Grid 
                    item 
                    xs={12} 
                    md={4} 
                    className="footer__redes" 
                    style={{
                        flexDirection : 'column'
                    }}
                >
                    <h4>Mis Redes</h4>
                    <ul>
                        <li>
                            <IconButton 
                                aria-label="Icono Instagram" 
                                href="https://www.instagram.com/mypika_tattoo" 
                                target="_blank" 
                                color="fuente"
                            >
                                <InstagramIcon 
                                    fontSize="large"
                                />
                            </IconButton>
                        </li>
                        <li>
                            <IconButton 
                                aria-label="Icono Twitter" 
                                href="https://twitter.com/MyPika_Tattoo" 
                                target="_blank" 
                                color="fuente"
                            >
                                <TwitterIcon 
                                    fontSize="large"
                                />
                            </IconButton>
                        </li>
                        <li>
                            <IconButton 
                                aria-label="Icono Twitch" 
                                href="https://twitch.tv/mypika_channel" 
                                target="_blank" 
                                color="fuente"
                            >
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="48" 
                                    height="48" 
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z" 
                                        fillRule="evenodd" 
                                        clipRule="evenodd" 
                                        fill="currentColor"
                                    />
                                </svg>
                            </IconButton>
                        </li>
                        <li>
                            <IconButton 
                                aria-label="Icono Cafecito" 
                                href="https://cafecito.app/mypika314" 
                                target="_blank" 
                                color="fuente"
                            >
                                <FreeBreakfastOutlinedIcon 
                                    fontSize="large"
                                />
                            </IconButton>
                        </li>
                    </ul>
                </Grid>
                <Grid 
                    item 
                    xs={12} 
                    md={4} 
                    className="footer__ubicacion" 
                    style={{
                        flexDirection : 'column'
                    }}
                >
                    <h4>
                        Dónde estamos...
                    </h4>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52571.66790264908!2d-58.5967102422493!3d-34.560410141320574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb76e0cd2c42b%3A0x910463c6fa9ebed6!2sAsd!5e0!3m2!1ses!2sar!4v1687206517087!5m2!1ses!2sar" width="200" height="200" loading="lazy"></iframe>
                </Grid>
            </Grid>
        </footer>
    )
}

export default FooterContainer