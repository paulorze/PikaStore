import { useState } from 'react';
import ItemFilter from './ItemFilter';
import { useTheme } from '@mui/material';

const ItemFilterContainer = ({parametroBusqueda,modificarParametroBusqueda, filterParams, checkURL}) => {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    //Creamos la funcion que modifique la URL al hacer click en alguno de los items para filtrar o buscar.
    const changeQuery = (key, value)=> {
        //Tomamos la url actual
        const querystring = window.location.search;
        const params = new URLSearchParams(querystring);
        //Le agregamos la key y el value que le corresponden a cada item
        params.set(key, value);
        //Reflejamos esta nueva url en el navegador
        window.history.replaceState({}, '', `${window.location.pathname}?${params}`)
    }



    return (
        <ItemFilter
            anchorEl = {anchorEl}
            open = {open}
            handleClick = {handleClick}
            handleClose = {handleClose}
            parametroBusqueda = {parametroBusqueda}
            modificarParametroBusqueda = {modificarParametroBusqueda}
            filterParams = {filterParams}
            theme = {theme}
            changeQuery = {changeQuery}
            checkURL = {checkURL}
        />
    )
}

export default ItemFilterContainer