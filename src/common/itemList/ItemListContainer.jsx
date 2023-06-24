import { Paper, useTheme } from '@mui/material';
import CardContainer from '../card/CardContainer';
import './ItemList.css';

const ItemListContainer = ({products, carritoAgregar}) => {
    const theme = useTheme();
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