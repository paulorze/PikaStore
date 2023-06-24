import NavBarContainer from "../../layout/navbar/NavBarContainer"
import HomeContainer from "../home/HomeContainer"
import FooterContainer from "../../layout/footer/FooterContainer"
import StoreContainer from "../store/StoreContainer"


const Main = ({carrito, carritoAgregar,cambiarTema, tema}) => {
    return (
        <>
            <NavBarContainer
                carrito={carrito}
                cambiarTema = {cambiarTema}
                tema= {tema}
            />
            <StoreContainer
                carritoAgregar={carritoAgregar}
            />
            <FooterContainer/>
        </>
    )
}

export default Main