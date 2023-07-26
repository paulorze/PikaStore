import { Button, Paper, Typography } from "@mui/material";
import CartItemContainer from "../../common/cartItem/CartItemContainer";
import './Cart.css'

const Cart = ({theme, carrito, carritoVaciar, carritoQuitarPorID, total}) => {
    return (
        <main
            style={{
                backgroundColor: theme.palette.background.default
            }}
        >
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
                            <>
                                <CartItemContainer
                                    carrito = {carrito}
                                    carritoQuitarPorID = {carritoQuitarPorID}
                                    />
                                <p>
                                    Total de la compra: ${total}
                                </p>
                                <div className="buttonContainer">
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                    >
                                        Confirmar compra
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="error"
                                        onClick={carritoVaciar}
                                    >
                                        Vaciar Carrito
                                    </Button>
                                </div>
                            </>
                        )
                    }
                </Paper>
            </section>
        </main>
    )
}

export default Cart