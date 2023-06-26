import { Paper, Typography } from "@mui/material";
import CartItemContainer from "../../common/cartItem/cartItemContainer";
import './Cart.css'

const Cart = ({theme, carrito}) => {
    return (
        <section
            className="cart__section"
            style={{
                backgroundColor : theme.palette.background.default
            }}
        >
            <Paper
                className="cart__paper"
            >
                <h1>
                    Pika | Cart
                </h1>
            </Paper>
            <Paper
                className="cart__paper"
            >
                {carrito.length == 0 ? (
                    <Typography>
                        A&uacute;n no tienes ningun producto agregado a tu carrito.
                    </Typography>
                ) : (
                        <CartItemContainer
                            carrito = {carrito}
                        />
                    )
                }
            </Paper>
        </section>
    )
}

export default Cart