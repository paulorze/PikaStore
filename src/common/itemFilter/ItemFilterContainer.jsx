import { useState } from 'react';
import ItemFilter from './ItemFilter';

const ItemFilterContainer = ({findItems, filterItems,parametroBusqueda,modificarParametroBusqueda, resetItems, filterParams}) => {
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
            anchorEl = {anchorEl}
            open = {open}
            handleClick = {handleClick}
            handleClose = {handleClose}
            findItems = {findItems}
            filterItems = {filterItems}
            parametroBusqueda = {parametroBusqueda}
            modificarParametroBusqueda = {modificarParametroBusqueda}
            resetItems = {resetItems}
            filterParams = {filterParams}
        />
    )
}

export default ItemFilterContainer