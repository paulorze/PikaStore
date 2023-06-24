import { IconButton } from "@mui/material";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import './ThemeToggle.css'

const ThemeToggle = ({cambiarTema,tema}) => {
    return (
        <IconButton 
            onClick={cambiarTema} 
            color="fuenteSecondary"
        >
            {tema ? <DarkModeIcon fontSize="large"/> : <LightModeIcon fontSize="large"/>}
        </IconButton>
    )
}

export default ThemeToggle