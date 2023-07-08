import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, IconButton } from '@mui/material';
import { Link } from "react-router-dom";


const CartWidgetContainer = ({cantidadProducto}) => {
    return (
        <Link
            to={'/cart'}
        >
            <IconButton>
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
        </Link>
    )
}

export default CartWidgetContainer