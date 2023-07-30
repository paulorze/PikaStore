import { useContext } from 'react';
import useCantidadProducto from "../../utils/hooks/useCantidad";
import { ThemeContext } from '../../context/ThemeContext';
import Card from './Card';
import { CartContext } from '../../context/CartContext';

const CardContainer = ({product}) => {
    const {theme, smDisplay} = useContext(ThemeContext)
    const {carritoAgregar} = useContext(CartContext)
    const {cantidadProducto, cantidadAgregar, cantidadRestar} = useCantidadProducto(product.id)

    return (
        <Card
            product = {product}
            theme = {theme}
            smDisplay = {smDisplay}
            carritoAgregar = {carritoAgregar}
            cantidadProducto = {cantidadProducto}
            cantidadAgregar = {cantidadAgregar}
            cantidadRestar = {cantidadRestar}
        />
    )
}

export default CardContainer