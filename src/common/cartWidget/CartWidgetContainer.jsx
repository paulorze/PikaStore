import { useContext } from "react";
import { CartContext } from '../../context/CartContext';
import CartWidget from "./CartWidget";


const CartWidgetContainer = () => {
    const {getTotalQuantity} = useContext(CartContext)
    let cantidad = getTotalQuantity();

    return (
        <CartWidget
            cantidad = {cantidad}
        />
    )
}

export default CartWidgetContainer