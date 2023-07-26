import { useContext } from "react";
import { useTheme } from "@mui/material";
import Cart from "./Cart";
import { CartContext } from '../../context/CartContext';


const CartContainer = () => {
    const theme = useTheme();
    const {carrito, carritoVaciar, carritoQuitarPorID, getTotalPrice} = useContext(CartContext);

    let total = getTotalPrice(); 
    
    return (
        <Cart
            theme = {theme}
            carrito = {carrito}
            carritoVaciar = {carritoVaciar}
            carritoQuitarPorID = {carritoQuitarPorID}
            total= {total}
        />
    )
}

export default CartContainer