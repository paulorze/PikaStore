import { useState } from "react";
import ItemFilterContainer from "../../common/itemFilter/ItemFilterContainer"
import { products } from '../../productsMock';
import { Paper, useTheme } from "@mui/material";
import CardContainer from "../../common/card/CardContainer";
import './Store.css';

const StoreContainer = ({carritoAgregar}) => {
    const theme = useTheme();
    const [foundItems, setFoundItems] = useState(products);
    const findItems = (param)=> {
        let searchResult = products.filter(item => item.title.toLowerCase().includes(param) || item.tags.toLowerCase().includes(param))
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
        setFoundItems(products)
        setFilteredItems([])
    };

    const filterParams = ['Indumentaria','Stickers','Accesorios']
    
    return (
        <>
            <section
                className="store__section"
                style={{
                    backgroundColor : theme.palette.background.default
                }}
            >
                <Paper
                    className="store__cabecera"
                >
                    <ItemFilterContainer
                        findItems = {findItems}
                        filterItems = {filterItems}
                        parametroBusqueda = {parametroBusqueda}
                        modificarParametroBusqueda = {modificarParametroBusqueda}
                        resetItems = {resetItems}
                        filterParams = {filterParams}
                    />
                </Paper>
            </section>
            <section
                className="store__section"
                style={{
                    backgroundColor : theme.palette.background.default
                }}
            >
                <Paper
                    className="store__cuerpo"
                >
                    {(filteredItems.length >= 1 ? filteredItems : foundItems).map((product)=>(
                        <CardContainer
                            key={product['id']}
                            product={product}
                            carritoAgregar = {carritoAgregar}
                        />
                    ))}
                </Paper>
            </section>
        </>
    )
}

export default StoreContainer