import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useSearch from "../../utils/hooks/useSearch";
import { productsFilters } from "../../filterparams";
import TabProductos from "./TabProductos";
import { ThemeContext } from "../../context/ThemeContext";


const TabProductosContainer = () => {
    const filterParams = productsFilters;
    const [searchParams, setSearchParams] = useSearchParams();
    const [items, setItems] = useState([]);
    const {theme, smDisplay, mdDisplay, lgDisplay} = useContext(ThemeContext);
    const [refreshItems, setRefreshItems] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    
    useEffect(()=> {
        useSearch(searchParams, 'products', setItems)
    },[searchParams, refreshItems])
    
    return (
        <TabProductos
            filterParams = {filterParams}
            searchParams = {searchParams}
            setSearchParams = {setSearchParams}
            items = {items}
            theme = {theme}
            smDisplay = {smDisplay}
            mdDisplay= {mdDisplay}
            lgDisplay = {lgDisplay}
            refreshItems = {refreshItems}
            setRefreshItems = {setRefreshItems}
            openModal = {openModal}
            setOpenModal = {setOpenModal}
        />
    )
}

export default TabProductosContainer