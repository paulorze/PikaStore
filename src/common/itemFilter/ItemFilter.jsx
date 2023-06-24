import { Grid, IconButton, MenuItem, Menu, Paper, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import TuneIcon from '@mui/icons-material/Tune';
import './ItemFilter.css';

const ItemFilter = ({theme, anchorEl, open, handleClick, handleClose, findProducts, filterProducts, parametroBusqueda, modificarParametroBusqueda, resetProducts}) => {
    return (
        <div className='filtrar' style={{
            backgroundColor : theme.palette.background.default
        }}>
            <Paper
                className='filtrar__paper'
            >
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
                        <IconButton
                            color='secondary'
                            onClick={()=>{
                                findProducts(parametroBusqueda)
                            }}
                        >
                            <SearchIcon
                                fontSize='large'
                                color='secondary'
                            />
                        </IconButton>
                    </Grid>
                    <Grid item
                        xs = {4}
                        sm = {1}
                        display={'flex'}
                        justifyContent={'center'}
                    >
                        <IconButton
                            color='secondary'
                            onClick={()=>{
                                resetProducts()
                            }}
                        >
                            <RestartAltIcon
                                fontSize='large'
                                color='secondary'
                            />
                        </IconButton>
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
                            <MenuItem
                                onClick={()=>{
                                    handleClose;
                                    filterProducts('Indumentaria')
                                }}
                            >
                                Indumentaria
                            </MenuItem>
                            <MenuItem
                                onClick={()=>{
                                    handleClose;
                                    filterProducts('Stickers')
                                }}
                            >
                                Stickers
                            </MenuItem>
                            <MenuItem
                                onClick={()=>{
                                    handleClose;
                                    filterProducts('Accesorios')
                                }}
                            >
                                Accesorios
                            </MenuItem>                            
                            <MenuItem
                                onClick={()=>{
                                    handleClose;
                                    filterProducts('asdasd')
                                }}
                            >
                                Todos los Productos
                            </MenuItem>
                        </Menu>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default ItemFilter