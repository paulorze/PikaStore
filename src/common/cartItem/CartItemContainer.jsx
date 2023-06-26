import { Grid, IconButton, Typography } from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const CartItemContainer = ({carrito}) => {
    return (
        <>
            <Grid
                container
                spacing={2}
            >
                {carrito.map((product)=>(
                    <>
                        <Grid
                            item
                            xs={8}
                        >
                            <Typography>
                                {product.title}
                            </Typography>
                            <Typography>
                                {product.price}
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={2}
                        >
                            {product.quantity}
                        </Grid>
                        <Grid
                            item
                            xs={1}
                        >
                            <Typography>
                                {product.price * product.quantity}
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={1}
                        >
                            <IconButton>
                                <HighlightOffIcon
                                    color="error"
                                />
                            </IconButton>
                        </Grid>
                    </>
                ))}
            </Grid>
        </>
    )
}

export default CartItemContainer