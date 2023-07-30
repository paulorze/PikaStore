import { Button, Grid, Paper } from "@mui/material";
import './ItemDetail.css';

const ItemDetail = ({theme, product, cantidadProducto, cantidadAgregar, cantidadRestar, carritoAgregar}) => {
    return (
        <main
            style={{
            backgroundColor : theme.palette.background.default
            }}
        >
            <section
            className="productDetail"
            style={{
                backgroundColor : theme.palette.background.default
            }}
            >
            <Grid
                container
                spacing={2}
            >
                <Grid
                item
                xs={12}
                md={8}
                >
                <Paper
                    className="productDetail__description"
                    style={{
                    backgroundColor : theme.palette.background.paper
                    }}
                >
                    <Grid
                    container
                    >
                    <Grid
                        item
                        xs={12}
                        lg={6}
                        className="productDetail__description__imgContainer"
                        style={{
                        padding: 0
                        }}
                    >
                        <img 
                        src={product.img} 
                        alt={product.title} 
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        lg={6}
                        style={{
                        padding : '4rem 0'
                        }}
                    >
                        <h1>
                        {product.title}
                        </h1>
                        <p
                        className="productDetail__description__1p"
                        >
                        {product.category}
                        </p>
                        <p
                        className="productDetail__description__2p"
                        >
                        {product.description}
                        </p>
                    </Grid>
                    </Grid>
                </Paper>
                </Grid>
                <Grid
                item
                xs={12}
                md={4}
                >
                <Paper
                    className="productDetail__quantity"
                    style={{
                    backgroundColor : theme.palette.background.paper
                    }}
                >
                    <div>
                    <h2>
                        ${product.price}
                    </h2>
                    <h3
                        className="productDetail__quantity__h3"
                    >
                        Stock disponible: {product.stock}
                    </h3>
                    </div>
                    <div className="productDetail__cantidadProducto">
                    <Button
                        variant='contained'
                        color='secondary'
                        onClick={()=>{cantidadRestar()}}
                        disabled = {cantidadProducto <= 1} 
                    >
                        -
                    </Button>
                    <h3>
                        {cantidadProducto}
                    </h3>
                    <Button
                        variant='contained'
                        color='secondary'
                        onClick={()=>{cantidadAgregar()}}
                        disabled = {cantidadProducto >= product['stock']} 
                    >
                        +
                    </Button>
                    </div>
                    <div 
                    className="productDetail__agregarCarrito"
                    >
                        <Button
                            variant='contained'
                            color='success'
                            onClick={()=>{carritoAgregar(product, cantidadProducto)}}
                        >
                            Agregar al Carrito
                        </Button>
                    </div>
                </Paper>
                </Grid>
            </Grid>
            </section>
        </main>
    )
}

export default ItemDetail