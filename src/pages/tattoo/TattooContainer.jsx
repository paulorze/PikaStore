import { useMediaQuery, useTheme } from "@mui/material";
import { disenos } from "../../disenos";
import { useState } from "react";
import Tattoo from "./Tattoo";

const TattooContainer = () => {
    const theme = useTheme();
    const desktop =  useMediaQuery('(min-width:1200px)');
    const tablet = useMediaQuery('(min-width:750px)')

    const [foundItems, setFoundItems] = useState(disenos);
    const findItems = (param)=> {
        let searchResult = disenos.filter(item => item.title.toLowerCase().includes(param) || item.tags.toLowerCase().includes(param))
        searchResult.length >= 1 ?  setFoundItems(searchResult) : alert(`Lo sentimos, no contamos con '${param}' entre nuestros productos.`)
        setFilteredItems([])
    };

    const [parametroBusqueda, setParametroBusqueda] = useState('');
    const modificarParametroBusqueda = (event) => {
        setParametroBusqueda(event.target.value)
    };
    
    const [filteredItems, setFilteredItems] = useState([]);
    const filterItems = (param)=> {
        setFilteredItems(foundItems.filter(item => item.category == param))
    };
    
    const resetItems = ()=>{
        setFoundItems(disenos)
        setFilteredItems([])
    };

    const filterParams = ['Digimon', 'Dragon Ball', 'Pokemon','Sailor Moon', 'SpyXFamily']

    return (
        <Tattoo
            theme = {theme}
            desktop = {desktop}
            tablet = {tablet}
            foundItems = {foundItems}
            findItems = {findItems}
            filterItems = {filterItems}
            filteredItems = {filteredItems}
            parametroBusqueda = {parametroBusqueda}
            modificarParametroBusqueda = {modificarParametroBusqueda}
            resetItems = {resetItems}
            filterParams={filterParams}
        />
    )
}

export default TattooContainer