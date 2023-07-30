import { useContext } from 'react';
import { Paper } from '@mui/material';
import { ThemeContext } from '../../context/ThemeContext';
import CardContainer from '../card/CardContainer';
import './ItemList.css';

const ItemListContainer = ({products, carritoAgregar}) => {
    const {theme} = useContext(ThemeContext)
    return (
        <section 
            className='products'
            style={{
                backgroundColor : theme.palette.background.default
            }}
        >
            <Paper className='products__container'>
                {products.map((product)=>(
                    <CardContainer
                        key={product['id']}
                        product={product}
                        carritoAgregar = {carritoAgregar}
                    />
                ))}
            </Paper>
        </section>
    )
}

export default ItemListContainer