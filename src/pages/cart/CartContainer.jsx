import { useTheme } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import Cart from "./Cart";


const CartContainer = () => {
    const theme = useTheme();
    const [carritoAgregar, carrito] = useOutletContext();
    return (
        <Cart
            theme = {theme}
            carrito = {carrito}
        />
    )
}

export default CartContainer