import NavBarContainer from "../../layout/navbar/NavBarContainer";
import ItemFilter from "../../common/itemFilter/ItemFilter";
import ItemListContainer from "../../common/itemList/ItemListContainer";
import Button from '@mui/material/Button'
import FooterContainer from "../../layout/footer/FooterContainer";

const Home = ({funcion, cantidadProductos, cambiarTema}) => {
    return (
        <>
            <NavBarContainer cantidadProductos = {cantidadProductos}/>
            <ItemFilter/>
            <ItemListContainer/>
            <Button variant="contained" onClick={()=> funcion()}>Agregar al Carrito</Button>
            <Button onClick={cambiarTema}>Cambiame el tema porfas</Button>
            <FooterContainer/>
        </>
    )
}

export default Home