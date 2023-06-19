import './ItemFilter.css';
import { Paper, useTheme } from "@mui/material";

const ItemFilter = () => {
    const theme = useTheme();
    return (
        <div className='filtrar' style={{
            backgroundColor : theme.palette.background.default
        }}>
            <Paper className='filtrar__paper'>
                <p className='filtrar__texto'>
                    Filtrar productos:
                </p>
                <ul className='filtrar__opciones'>
                    <li onClick={()=> {console.log('Filtraste productos de categoria indumentaria.')}}>Indumentaria</li>
                    <li onClick={()=> {console.log('Filtraste productos de categoria stickers .')}}>Stickers</li>
                    <li onClick={()=> {console.log('Filtraste productos de categoria accesorios.')}}>Accesorios</li>
                </ul>
            </Paper>
        </div>
    )
}

export default ItemFilter