import NavBarContainer from "../../layout/navbar/NavBarContainer";
import ItemFilter from "../../common/itemFilter/itemFilter";
import ItemListContainer from "../../common/itemList/itemListContainer";
import Button from '@mui/material/Button'

const Home = ({funcion, cantidadProductos}) => {
    return (
        <>
            <NavBarContainer cantidadProductos = {cantidadProductos}/>
            <ItemFilter/>
            <ItemListContainer/>
            <Button variant="contained" color="success" onClick={()=> funcion()}>Agregar al Carrito</Button>
        </>
    )
}

export default Home