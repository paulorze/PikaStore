import { products } from '../../productsMock';
import { useEffect, useState, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { useTheme } from "@mui/material";
import Store from './Store';
import { CartContext } from '../../context/CartContext';

const StoreContainer = () => {
    const theme = useTheme();

    //Creamos un array con la lista de categorias para que la misma se construya de manera dinamica dependiendo del contexto del itemfilter
    const filterParams = [{'key': 1, 'categoria': 'Indumentaria'},{'key': 2, 'categoria': 'Stickers'},{'key': 3, 'categoria': 'Accesorios'}]

    const [items, setItems] = useState([])
    
    const [searchParams, setSearchParams] = useSearchParams();

    const [parametroBusqueda, setParametroBusqueda] = useState('');
    const modificarParametroBusqueda = (event) => {
        setParametroBusqueda(event.target.value)
    };

    const resetValue = '/store';

    const {carritoAgregar} = useContext(CartContext)

    useEffect(()=>{
        let filteredProducts;
        //Creamos las constantes que corresponden a los parametros de busqueda y de categorias
        const search = searchParams.get('search');  //devuelve null si no se paso esta query
        const category = searchParams.get('category');
        //Si existe la query search, filtramos los productos por lo que se busco
        search && (filteredProducts = products.filter(product => product.title.includes(search) || product.tags.includes(search)));
        //Si existe la query category, filtramos los productos que cumplan con el requisito
        filteredProducts
            ? (category && (filteredProducts = filteredProducts.filter(product => product.category === category)))
            : (category && (filteredProducts = products.filter(product => product.category === category)))

        const fetchItems = new Promise((res)=> {
            res(filteredProducts ? filteredProducts : products)
        });

        fetchItems
            .then((res)=> {
                setItems(res)
            })
            .catch(error=>console.log(error));
        
    },[searchParams])
    
    return (
        <Store
            theme = {theme}
            parametroBusqueda = {parametroBusqueda}
            modificarParametroBusqueda = {modificarParametroBusqueda}
            filterParams = {filterParams}
            searchParams = {searchParams}
            setSearchParams = {setSearchParams}
            items = {items}
            carritoAgregar = {carritoAgregar}
            resetValue={resetValue}
        />
    )
}

export default StoreContainer