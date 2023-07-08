import { Grid, IconButton, MenuItem, Menu, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import TuneIcon from '@mui/icons-material/Tune';
import { Link } from "react-router-dom";

const ItemFilter = ({anchorEl, open, handleClick, handleClose, parametroBusqueda, modificarParametroBusqueda, filterParams, theme, changeQuery, checkURL}) => {
    return (
        <Grid
            container
        >
            <Grid item
                xs = {12}
                sm = {9}
            >
                <TextField
                    label='Busque aqu&iacute;'
                    variant='outlined'
                    color='secondary'
                    fullWidth
                    onChange={modificarParametroBusqueda}
                />
            </Grid>
            <Grid item
                xs = {4}
                sm = {1}
                display={'flex'}
                justifyContent={'center'}
            >
                <Link
                    to={`./store/search?=${parametroBusqueda}`}
                >
                    <IconButton
                        color='secondary'
                    >
                        <SearchIcon
                            fontSize='large'
                            color='secondary'
                        />
                    </IconButton>
                </Link>
            </Grid>
            <Grid item
                xs = {4}
                sm = {1}
                display={'flex'}
                justifyContent={'center'}
            >
                <Link
                    to={'/store'}
                >
                    <IconButton
                        color='secondary'
                    >
                        <RestartAltIcon
                            fontSize='large'
                            color='secondary'
                        />
                    </IconButton>
                </Link>
            </Grid>
            <Grid item
                xs = {4}
                sm = {1}
                display={'flex'}
                justifyContent={'center'}
            >
                <IconButton
                    color='secondary'
                    id = 'filter__button'
                    aria-controls={open ? 'filter__menu' : undefined}
                    aria-haspopup = 'true'
                    aria-expanded = {open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <TuneIcon
                        fontSize='large'
                        color='secondary'
                    />
                </IconButton>
                <Menu
                    id='filter__menu'
                    anchorEl={anchorEl}
                    open = {open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'filter__button'
                    }}
                >
                    {filterParams.map((param)=>(
                        <MenuItem
                        key={param.key}
                        onClick={()=>{
                            handleClose();
                            changeQuery('category', param.categoria);
                            checkURL();
                        }}
                        >
                            {param.categoria}
                        </MenuItem>
                    ))}                         
                    <MenuItem
                        onClick={handleClose}>
                        <Link
                            to={`/store`}
                            style={{
                                color : theme.palette.fuenteSecondary.main,
                                textDecoration: 'none'
                            }}
                        >
                            Todos los Productos
                        </Link>
                    </MenuItem>
                </Menu>
            </Grid>
        </Grid>
    )
}

export default ItemFilter