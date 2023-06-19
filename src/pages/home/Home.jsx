import NavBarContainer from "../../layout/navbar/NavBarContainer";
import ItemFilter from "../../common/itemFilter/ItemFilter";
import ItemListContainer from "../../common/itemList/ItemListContainer";
import FooterContainer from "../../layout/footer/FooterContainer";
import BotonesPrueba from "../../common/botonesPrueba/BotonesPrueba";

const Home = ({funcion, cantidadProductos, cambiarTema, tema}) => {
    return (
        <>
            <NavBarContainer cantidadProductos = {cantidadProductos}/>
            <ItemFilter/>
            <ItemListContainer/>
            <BotonesPrueba 
                funcion = {funcion}
                cambiarTema = {cambiarTema}
                tema = {tema}
            />
            <FooterContainer/>
        </>
    )
}

export default Home