import { Button, Grid, List, Paper, Typography } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SendIcon from '@mui/icons-material/Send';
import { Link } from "react-router-dom";
import ListItemCartContainer from "../../common/listItemCart/ListItemCartContainer";
import './Cart.css'

const Cart = ({theme, carrito, carritoVaciarConfirmar, total}) => {
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
                        <Typography
                            style={{
                                margin: '1rem'
                            }}
                        >
                            A&uacute;n no tienes ningun producto agregado a tu carrito.
                        </Typography>
                    ) : (
                            <Grid
                                container
                            >
                                <Grid
                                    item
                                    xs={12}
                                >
                                    <List>
                                        {carrito.map((product)=>(
                                            <ListItemCartContainer
                                                key = {product.id}
                                                product = {product}
                                            />
                                        ))}
                                    </List>
                                </Grid>
                                <Grid
                                    container
                                    item
                                    style={{
                                        padding: '1rem'
                                    }}
                                    xs={12}
                                >
                                    <Grid
                                        item
                                        display={'flex'}
                                        justifyContent={'center'}
                                        alignItems={'center'}
                                        xs={6}
                                    >
                                        <Typography
                                            style={{
                                                fontSize : '1.5rem'
                                            }}
                                        >
                                            Total de la compra: 
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        display={'flex'}
                                        justifyContent={'center'}
                                        alignItems={'center'}
                                        xs={6}
                                    >
                                        <Typography
                                            style={{
                                                fontSize : '1.5rem'
                                            }}
                                        >
                                            <strong>
                                                ${total}
                                            </strong>
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    item
                                    style={{
                                        padding: '1rem'
                                    }}
                                    xs={12}
                                >
                                    <Grid
                                        item
                                        display={'flex'}
                                        justifyContent={'center'}
                                        alignItems={'center'}
                                        xs={12}
                                        sm={6}
                                    >
                                        <Button
                                            variant="outlined"
                                            color="error"
                                            endIcon={<DeleteForeverIcon/>}
                                            onClick={carritoVaciarConfirmar}
                                        >
                                            Vaciar Carrito
                                        </Button>
                                    </Grid>
                                    <Grid
                                        item
                                        display={'flex'}
                                        justifyContent={'center'}
                                        alignItems={'center'}
                                        xs={12}
                                        sm={6}
                                    >
                                        <Link
                                            to={'/checkout'}
                                        >
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                endIcon={<SendIcon/>}
                                            >
                                                Confirmar compra
                                            </Button>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Grid>
                        )
                    }
                </Paper>
            </section>
        </main>
    )
}

export default Cart