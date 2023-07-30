import { useState, useContext } from "react";
import { CartContext } from '../../context/CartContext';

const useCantidadProducto = (id)=> {
    const {getQuantityByID} = useContext(CartContext)

    let cantidadInicial = getQuantityByID(id);
    const [cantidadProducto, setCantidadProducto] = useState(cantidadInicial);
    const cantidadAgregar = ()=> {
        setCantidadProducto(cantidadProducto + 1)
    };
    const cantidadRestar = ()=>{
        setCantidadProducto(cantidadProducto - 1)
    };

    return {cantidadProducto, cantidadAgregar, cantidadRestar}
};

export default useCantidadProducto;