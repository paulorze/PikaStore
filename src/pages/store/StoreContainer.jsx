import { useEffect, useState } from "react";
import ItemFilterContainer from "../../common/itemFilter/ItemFilterContainer"
import { products } from '../../productsMock';
import { Paper, useTheme } from "@mui/material";
import CardContainer from "../../common/card/CardContainer";
import { useLocation } from "react-router-dom";
import './Store.css';

const StoreContainer = ({carritoAgregar}) => {
    const theme = useTheme();

    const [items, setItems] = useState([])
    
    const location = useLocation();
    const queryString = location.search;
    const param =  new URLSearchParams(queryString);

    const [urlChange, setUrlChange] = useState(true)
    const checkURL = () => {
        setUrlChange(!urlChange)
        console.log(urlChange)
    }

    useEffect(()=>{
        let filteredProducts;
        //Creamos las constantes que corresponden a los parametros de busqueda y de categorias
        const search = param.get('search');  //devuelve null si no se paso esta query
        const category = param.get('category');
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
        
    },[urlChange])

    const [parametroBusqueda, setParametroBusqueda] = useState('');
    const modificarParametroBusqueda = (event) => {
        setParametroBusqueda(event.target.value)
    };

    //Creamos un array con la lista de categorias para que la misma se construya de manera dinamica dependiendo del contexto del itemfilter
    const filterParams = [{'key': 1, 'categoria': 'Indumentaria'},{'key': 2, 'categoria': 'Stickers'},{'key': 3, 'categoria': 'Accesorios'}]
    
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
                        parametroBusqueda = {parametroBusqueda}
                        modificarParametroBusqueda = {modificarParametroBusqueda}
                        filterParams = {filterParams}
                        checkURL = {checkURL}
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
                    {(items).map((product)=>(
                        <CardContainer
                            key={product.id}
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