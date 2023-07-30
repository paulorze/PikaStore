import { Divider, Grid, IconButton, ListItem, Typography } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import QuantityControlsContainer from "../quantityControls/QuantityControlsContainer";
import './ListItemCart.css';

const ListItemCart = ({product, carritoAgregar, carritoQuitarPorID, cantidadRestar, cantidadProducto, cantidadAgregar, smDisplay, mdDisplay}) => {
    return (
        <>
            <ListItem>
                <Grid
                    item
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    style={{
                        display: (mdDisplay ? 'flex' : 'none')
                    }}
                    md={2}
                >
                    <div
                        className="cartItem__img"
                    >
                        <img
                            src={product.img} 
                            alt="Imagen del Producto" 
                        />
                    </div>
                </Grid>
                <Grid
                    container
                    item
                    xs={12}
                    md={10}
                >
                    <Grid
                        item
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        xs={12}
                        sm={6}
                    >
                        <Typography
                            className="producto__nombre"
                            style={{
                                fontSize : '1.25rem',
                                fontWeight : '700',
                                textAlign: 'center'
                            }}
                        >
                            {product.title}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        style={{
                            display: (smDisplay ? 'flex' : 'none')
                        }}
                        sm={2}
                    >
                    </Grid>
                    <Grid
                        item
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        xs={8}
                        sm={2}
                    >
                        <Typography
                            style={{
                                fontSize : '.75rem'
                            }}
                        >
                            Precio por Unidad:
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        xs={4}
                        sm={2}
                    >
                        <strong>${product.price}</strong>
                    </Grid>
                    <Grid
                        item
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        xs={8}
                        sm={6}
                    >
                        <QuantityControlsContainer
                            cantidadRestar={cantidadRestar}
                            cantidadProducto={cantidadProducto}
                            cantidadAgregar={cantidadAgregar}
                            product={product}
                        />
                    </Grid>
                    <Grid
                        item
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        xs={2}
                        sm={1}
                    >
                        <IconButton
                            onClick={()=>carritoAgregar(product,cantidadProducto)}
                        >
                            <BorderColorIcon
                                color="secondary"
                            />
                        </IconButton>
                    </Grid>
                    <Grid
                        item
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        xs={2}
                        sm={1}
                    >
                        <IconButton
                            onClick={()=>carritoQuitarPorID(product.id)}
                        >
                            <DeleteForeverIcon
                                color="error"
                            />
                        </IconButton>
                    </Grid>
                    <Grid
                        item
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        xs={8}
                        sm={2}
                    >
                        <Typography>
                            Subtotal:
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        xs={4}
                        sm={2}
                    >
                        <Typography
                            style={{
                                fontSize : '1.25rem',
                                fontWeight : '700'
                            }}
                        >
                            <strong>${product.price * product.quantity}</strong>
                        </Typography>
                    </Grid>
                </Grid>
            </ListItem>
            <Divider
                component={'li'}
            />
        </>
    )
}

export default ListItemCart