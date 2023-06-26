import { useTheme } from "@mui/material";
import Cart from "./Cart";


const CartContainer = ({carrito}) => {
    const theme = useTheme();
    return (
        <Cart
            theme = {theme}
            carrito = {carrito}
        />
    )
}

export default CartContainer