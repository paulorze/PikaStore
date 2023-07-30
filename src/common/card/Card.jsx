import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import QuantityControlsContainer from '../quantityControls/QuantityControlsContainer';
import './Card.css';

const Card = ({product, theme, smDisplay, carritoAgregar, cantidadProducto, cantidadAgregar, cantidadRestar}) => {
    return (
        <div 
            className='card'
            style={{
                border: `1px solid ${theme.palette.fuenteSecondary.main}`,
                backgroundColor : theme.palette.primary.main,
                color: theme.palette.fuente.main
        }}>
            <div className="card__top">
                <img src={product['img']} alt="Imagen del producto" />
            </div>
            <div className="card__bottom">
                <div className='card__bottom__text'>
                    <h2>
                        {product['title']}
                    </h2>
                    <h3>
                        $ {product['price']}
                    </h3>
                </div>
                <div className="card__bottom__cantidadProducto">
                    <QuantityControlsContainer
                        cantidadRestar={cantidadRestar}
                        cantidadProducto={cantidadProducto}
                        cantidadAgregar={cantidadAgregar}
                        product={product}
                    />
                </div>
                <div className="card__bottom__agregarCarrito">
                    <Button
                        variant='contained'
                        color='success'
                        size = {smDisplay ? 'medium' : 'small'}
                        onClick={()=>{carritoAgregar(product, cantidadProducto)}}
                    >
                        Agregar al Carrito
                    </Button>
                    <Link
                        to={`/product/${product['id']}`}
                    >
                        <Button
                            variant='contained'
                            color='secondary'
                            size = {smDisplay ? 'medium' : 'small'}
                        >
                            Ver Detalles
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card