import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { CartContext } from '../../context/CartContext';
import Cart from "./Cart";


const CartContainer = () => {
    const {theme} = useContext(ThemeContext)
    const {carrito, carritoVaciarConfirmar, getTotalPrice} = useContext(CartContext);

    let total = getTotalPrice(); 
    
    return (
        <Cart
            theme = {theme}
            carrito = {carrito}
            carritoVaciarConfirmar = {carritoVaciarConfirmar}
            total= {total}
        />
    )
}

export default CartContainer