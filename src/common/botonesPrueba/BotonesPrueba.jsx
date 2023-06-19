import { IconButton, Paper, useTheme } from "@mui/material";
import Button from '@mui/material/Button'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import './BotonesPrueba.css'

const BotonesPrueba = ({funcion, cambiarTema,tema}) => {
    const theme = useTheme();
    return (
        <div className='botonesPrueba' style={{
            backgroundColor: theme.palette.background.default
        }}>
            <Paper className="botonesPrueba__paper">
                <Button variant="contained" onClick={()=> funcion()}>Agregar al Carrito</Button>
                <IconButton onClick={cambiarTema} color="fuenteSecondary">
                    {tema ? <DarkModeIcon/> : <LightModeIcon/>}
                </IconButton>
            </Paper>
        </div>
    )
}

export default BotonesPrueba