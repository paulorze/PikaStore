import { Button } from '@mui/material';
import { useTheme } from '@emotion/react';
import './Card.css';
import { useState } from 'react';

const CardContainer = ({product, carritoAgregar}) => {
    const theme = useTheme();
    const [cantidadProducto, setCantidadProducto] = useState(1);
    const cantidadAgregar = ()=> {
        setCantidadProducto(cantidadProducto + 1)
    };
    const cantidadRestar = ()=>{
        setCantidadProducto(cantidadProducto - 1)
    };
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
                <h2>
                    {product['title']}
                </h2>
                <h3>
                    $ {product['price']}
                </h3>
                <div className="card__bottom__cantidadProducto">
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
                <div className="card__bottom__agregarCarrito">
                    <Button
                        variant='contained'
                        color='success'
                        onClick={()=>{carritoAgregar(product, cantidadProducto)}}
                    >
                        Agregar al Carrito
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CardContainer