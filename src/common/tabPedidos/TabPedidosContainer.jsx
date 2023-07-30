import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { List} from "@mui/material"
import useSearch from "../../utils/hooks/useSearch";
import SkeletonTabContainer from "../skeletonTab/SkeletonTabContainer";
import ListItemPedidosContainer from "../listItemPedidos/ListItemPedidosContainer";
import './TabPedidos.css'

const TabPedidosContainer = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [items, setItems] = useState([])
    const [refreshItems, setRefreshItems] = useState(false)

    useEffect(()=> {
        useSearch(searchParams, 'orders', setItems)
    },[searchParams, refreshItems])

    return (
        <>
            {(items.length === 0 && searchParams.size === 0) 
                ? (<SkeletonTabContainer/>) : (
                <List
                    style={{
                        width: '100%',
                    }}
                >
                    {items.map((item)=> (
                        <ListItemPedidosContainer 
                            key={item.id} 
                            item = {item} 
                            refreshItems = {refreshItems} 
                            setRefreshItems = {setRefreshItems} 
                        />))}
                </List>
            )}
        </>
    )
}

export default TabPedidosContainer