import { useTheme } from "@mui/material";
import { useState } from 'react';
import ItemFilter from './ItemFilter';

const ItemFilterContainer = ({findProducts, filterProducts,parametroBusqueda,modificarParametroBusqueda, resetProducts}) => {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <ItemFilter
            theme = {theme}
            anchorEl = {anchorEl}
            open = {open}
            handleClick = {handleClick}
            handleClose = {handleClose}
            findProducts = {findProducts}
            filterProducts = {filterProducts}
            parametroBusqueda = {parametroBusqueda}
            modificarParametroBusqueda = {modificarParametroBusqueda}
            resetProducts = {resetProducts}
        />
    )
}

export default ItemFilterContainer