import { useState } from 'react';
import ItemFilter from './ItemFilter';

const ItemFilterContainer = ({ filterParams, searchParams, setSearchParams }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [parametroBusqueda, setParametroBusqueda] = useState('');
    const modificarParametroBusqueda = (event) => {
        setParametroBusqueda(event.target.value)
    };

    const checkForEnter = (e)=>{
        e.key === 'Enter' && changeQuery('search', parametroBusqueda)
    };

    //Creamos la funcion que modifique la URL al hacer click en alguno de los items para filtrar o buscar.
    const changeQuery = (key, value)=> {
        searchParams.set(key, value);
        setSearchParams(searchParams);
    };

    const deleteQuery = () =>{
        searchParams.delete('category')
        setSearchParams(searchParams);
    };

    const resetQuery = ()=> {
        setSearchParams([])
    }

    return (
        <ItemFilter
            anchorEl = {anchorEl}
            open = {open}
            handleClick = {handleClick}
            handleClose = {handleClose}
            parametroBusqueda = {parametroBusqueda}
            modificarParametroBusqueda = {modificarParametroBusqueda}
            checkForEnter={checkForEnter}
            filterParams = {filterParams}
            changeQuery = {changeQuery}
            deleteQuery = {deleteQuery}
            resetQuery = {resetQuery}
        />
    )
}

export default ItemFilterContainer