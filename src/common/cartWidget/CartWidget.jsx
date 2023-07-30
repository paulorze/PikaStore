import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, IconButton } from '@mui/material';
import { Link } from "react-router-dom";

const CartWidget = ({cantidad}) => {
    return (
        <Link
                to={'/cart'}
            >
                <IconButton>
                    <Badge
                        badgeContent={cantidad} 
                        color="secondary" 
                        showZero 
                        overlap="circular" 
                        aria-label={`Cantidad de productos en el carrito ${cantidad}`}
                    >
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
            </Link>
    )
}

export default CartWidget