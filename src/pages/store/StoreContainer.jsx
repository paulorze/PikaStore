import { useState } from "react";
import ItemFilterContainer from "../../common/itemFilter/ItemFilterContainer"
import ItemListContainer from "../../common/itemList/ItemListContainer"
import { products } from '../../productsMock';

const StoreContainer = ({carritoAgregar}) => {
    const [foundProducts, setFoundProducts] = useState(products);
    const findProducts = (param)=> {
        let searchResult = products.filter(product => product.title.toLowerCase().includes(param))
        searchResult.length >= 1 ?  setFoundProducts(searchResult) : alert(`Lo sentimos, no contamos con '${param}' entre nuestros productos.`)
    };

    const [parametroBusqueda, setParametroBusqueda] = useState('');
    const modificarParametroBusqueda = (event) => {
        setParametroBusqueda(event.target.value)
    };

    const resetProducts = ()=>{
        setFoundProducts(products)
    };

    const [filteredProducts, setProductList] = useState([]);
    const filterProducts = (param)=> {
        setProductList(foundProducts.filter(product => product.category == param))
    };


    return (
        <>
            <ItemFilterContainer
                findProducts = {findProducts}
                filterProducts = {filterProducts}
                parametroBusqueda = {parametroBusqueda}
                modificarParametroBusqueda = {modificarParametroBusqueda}
                resetProducts = {resetProducts}
            />
            <ItemListContainer
                carritoAgregar={carritoAgregar}
                products = {filteredProducts.length >= 1 ? filteredProducts : foundProducts}
            />
        </>
    )
}

export default StoreContainer