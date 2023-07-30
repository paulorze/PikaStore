import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { List} from "@mui/material"
import useSearch from "../../utils/hooks/useSearch";
import SkeletonTabContainer from "../skeletonTab/SkeletonTabContainer";
import ListItemOrderHistoryContainer from "../listItemOrderHistory/ListItemOrderHistory";
import './TabOrderHistory.css'

const TabOrderHistoryContainer = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [items, setItems] = useState([])

    useEffect(()=> {
        useSearch(searchParams, 'orderHistory', setItems)
    },[searchParams])

    return (
        <>
            {(items.length === 0 && searchParams.size === 0) 
                ? (<SkeletonTabContainer/>) : (
                <List
                    style={{
                        width: '100%',
                    }}
                >
                    {items.map((item)=> (<ListItemOrderHistoryContainer key={item.id} item = {item}/>))}
                </List>
            )}
        </>
    )
}

export default TabOrderHistoryContainer