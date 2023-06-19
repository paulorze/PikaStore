import { useTheme } from "@mui/material"
import ItemList from "./ItemList"

const ItemListContainer = () => {
    const greeting = 'Bienvenido, nuevo usuario';
    const theme = useTheme();

    return (
        <ItemList 
            greeting = {greeting}
            theme = {theme}
        />
    )
}

export default ItemListContainer