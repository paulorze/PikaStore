import ItemList from "./ItemList"

const ItemListContainer = () => {
    const greeting = 'Bienvenido, nuevo usuario'
    return (
        <ItemList greeting = {greeting}/>
    )
}

export default ItemListContainer