import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { designFilters } from "../../filterparams";
import useSearch from "../../utils/hooks/useSearch";
import Tattoo from "./Tattoo";

const TattooContainer = () => {
    const {theme, smDisplay, mdDisplay, lgDisplay, xlDisplay} = useContext(ThemeContext)
    const filterParams = designFilters;
    const [items, setItems] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(()=>{
        useSearch(searchParams, 'designs', setItems)
    },[searchParams])

    return (
        <Tattoo
            theme = {theme}
            smDisplay = {smDisplay}
            mdDisplay = {mdDisplay}
            lgDisplay = {lgDisplay}
            xlDisplay = {xlDisplay}
            filterParams={filterParams}
            searchParams = {searchParams}
            setSearchParams = {setSearchParams}
            items = {items}
        />
    )
}

export default TattooContainer