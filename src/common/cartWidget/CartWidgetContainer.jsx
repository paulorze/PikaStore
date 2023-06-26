import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, IconButton } from '@mui/material';

const CartWidgetContainer = ({cantidadProducto, changePage}) => {
    return (
        <IconButton
            onClick={()=>{changePage('cart')}}
        >
            <Badge
                badgeContent={cantidadProducto} 
                color="secondary" 
                showZero 
                overlap="circular" 
                aria-label={`Cantidad de productos en el carrito ${cantidadProducto}`}
            >
                <ShoppingCartIcon />
            </Badge>
        </IconButton>
    )
}

export default CartWidgetContainer