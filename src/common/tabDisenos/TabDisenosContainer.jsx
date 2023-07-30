import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useSearch from "../../utils/hooks/useSearch";
import { ThemeContext } from "../../context/ThemeContext";
import { designFilters } from "../../filterparams";
import TabDisenos from "./TabDisenos";

const TabDisenosContainer = () => {
    const filterParams = designFilters;
    const [searchParams, setSearchParams] = useSearchParams();
    const [items, setItems] = useState([]);
    const {theme, smDisplay, mdDisplay, lgDisplay} = useContext(ThemeContext);
    const [refreshItems, setRefreshItems] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    useEffect(()=> {
        useSearch(searchParams, 'designs', setItems)
    },[searchParams, refreshItems])

    return (
        <TabDisenos
            filterParams = {filterParams}
            searchParams = {searchParams}
            setSearchParams = {setSearchParams}
            items = {items}
            theme = {theme}
            smDisplay = {smDisplay}
            mdDisplay = {mdDisplay}
            lgDisplay = {lgDisplay}
            refreshItems = {refreshItems}
            setRefreshItems = {setRefreshItems}
            openModal = {openModal}
            setOpenModal = {setOpenModal}
        />
    )
}

export default TabDisenosContainer