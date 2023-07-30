import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { CartContext } from "../../context/CartContext";
import useCantidadProducto from "../../utils/hooks/useCantidad";
import ListItemCart from "./ListItemCart";

const ListItemCartContainer = ({product}) => {
    const {smDisplay, mdDisplay} = useContext(ThemeContext)
    const {carritoAgregar, carritoQuitarPorID} = useContext(CartContext)
    const {cantidadRestar, cantidadProducto, cantidadAgregar} = useCantidadProducto(product.id);

    return (
        <ListItemCart
            product = {product}
            carritoAgregar = {carritoAgregar}
            carritoQuitarPorID = {carritoQuitarPorID}
            cantidadRestar = {cantidadRestar}
            cantidadProducto = {cantidadProducto}
            cantidadAgregar = {cantidadAgregar}
            smDisplay = {smDisplay}
            mdDisplay = {mdDisplay}
        />
    )
}

export default ListItemCartContainer