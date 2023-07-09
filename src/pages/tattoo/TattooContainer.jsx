import { useMediaQuery, useTheme } from "@mui/material";
import { disenos } from "../../disenos";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Tattoo from "./Tattoo";

const TattooContainer = () => {
    const theme = useTheme();

    const filterParams = ['Digimon', 'Dragon Ball', 'Pokemon','Sailor Moon', 'SpyXFamily']

    const desktop =  useMediaQuery('(min-width:1200px)');
    const tablet = useMediaQuery('(min-width:750px)')

    const [items, setItems] = useState([])

    const [searchParams, setSearchParams] = useSearchParams();
    
    const [parametroBusqueda, setParametroBusqueda] = useState('');
    const modificarParametroBusqueda = (event) => {
        setParametroBusqueda(event.target.value)
    };

    useEffect(()=>{
        let filteredProducts;
        //Creamos las constantes que corresponden a los parametros de busqueda y de categorias
        const search = searchParams.get('search');  //devuelve null si no se paso esta query
        const category = searchParams.get('category');
        //Si existe la query search, filtramos los productos por lo que se busco
        search && (filteredProducts = disenos.filter(product => product.title.includes(search) || product.tags.includes(search)));
        //Si existe la query category, filtramos los productos que cumplan con el requisito
        filteredProducts
            ? (category && (filteredProducts = filteredProducts.filter(product => product.category === category)))
            : (category && (filteredProducts = products.filter(product => product.category === category)))

        const fetchItems = new Promise((res)=> {
            res(filteredProducts ? filteredProducts : disenos)
        });

        fetchItems
            .then((res)=> {
                setItems(res)
            })
            .catch(error=>console.log(error));
        
    },[searchParams])

    return (
        <Tattoo
            theme = {theme}
            desktop = {desktop}
            tablet = {tablet}
            parametroBusqueda = {parametroBusqueda}
            modificarParametroBusqueda = {modificarParametroBusqueda}
            filterParams={filterParams}
            searchParams = {searchParams}
            setSearchParams = {setSearchParams}
            items = {items}
        />
    )
}

export default TattooContainer