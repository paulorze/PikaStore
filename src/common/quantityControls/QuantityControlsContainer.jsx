import { IconButton } from '@mui/material';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const QuantityControlsContainer = ({cantidadRestar, cantidadProducto, cantidadAgregar, product}) => {
    return (
        <>
            <IconButton
                variant='contained'
                color='secondary'
                size='large'
                onClick={()=>{cantidadRestar()}}
                disabled = {cantidadProducto <= 1}
            >
                <RemoveCircleIcon
                    fontSize='inherit'
                />
            </IconButton>
            <h3>
                {cantidadProducto}
            </h3>
            <IconButton
                variant='contained'
                color='secondary'
                size='large'
                onClick={()=>{cantidadAgregar()}}
                disabled = {cantidadProducto >= product['stock']} 
            >
                <AddCircleIcon
                    fontSize='inherit'
                />
            </IconButton>
        </>
    )
}

export default QuantityControlsContainer