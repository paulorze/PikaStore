import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { productsFilters } from "../../filterparams";
import { useSearchParams } from "react-router-dom";
import useSearch from "../../utils/hooks/useSearch";
import Store from './Store';

const StoreContainer = () => {
    const {theme} = useContext(ThemeContext)
    const filterParams = productsFilters;
    const [items, setItems] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(()=>{
        useSearch(searchParams, 'products', setItems)
    },[searchParams]);
    
    return (
        <Store
            theme = {theme}
            filterParams = {filterParams}
            searchParams = {searchParams}
            setSearchParams = {setSearchParams}
            items = {items}
        />
    )
}

export default StoreContainer