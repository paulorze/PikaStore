import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';

const CartWidgetContainer = ({cantidadProductos}) => {
    return (
        <Badge badgeContent={cantidadProductos} color="secondary" showZero overlap="circular" aria-label={`Cantidad de productos en el carrito ${cantidadProductos}`}>
            <ShoppingCartIcon />
        </Badge>
    )
}

export default CartWidgetContainer