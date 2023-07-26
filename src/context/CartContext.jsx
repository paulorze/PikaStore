import { createContext, useState } from "react"
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

export const CartContext = createContext();

const CartContextComponent = ({children}) => {
    const toastAgregar = (nombre, cantidad) => {
        toast.success(`Ahora tienes ${cantidad} unidad(es) de ${nombre} en tu carrito 🛒`, {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }

    const [carrito, setCarrito] = useState([]);
    const carritoAgregar = (producto,cantidad)=>{
        const data = {
            ...producto,
            quantity: cantidad
        };
        let productoEnCarrito = carrito.some((elemento)=> elemento.id === producto.id);
        if (productoEnCarrito) {
            let newCarrito = carrito.map(elemento => {
                if (elemento.id === producto.id) {
                    if (elemento.quantity + cantidad <= elemento.stock) {
                        toastAgregar(elemento.title, cantidad)
                        return {...elemento, quantity: cantidad}
                    } else {
                        toastAgregar(elemento.title, elemento.stock)
                        return{...elemento, quantity: elemento.stock}
                    }
                } else {
                    return elemento
                }
            })
            setCarrito(newCarrito)
        } else {
            toastAgregar(producto.title, cantidad)
            setCarrito(current => [...current, data]);
        };
    };

    const carritoVaciar = ()=> {
        Swal.fire({
            title: 'Vaciar el carrito',
            text: "¿Realmente desea vaciar el carrito?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Si, ¡vaciar!',
            cancelButtonText: 'Cancelar',
            background: '#7B2CBF',
            color: '#ffffff'
        }).then((result) => {
            if (result.isConfirmed) {
                setCarrito([]);
                Swal.fire({
                    title: 'Carrito vacío',
                    text: 'El carrito ha sido vaciado correctamente.',
                    icon: 'success',
                    background: '#7B2CBF',
                    color: '#ffffff'
                })
            }
        })
    };

    const carritoQuitarPorID = (id)=> {
        let newCarrito = carrito.filter(producto => (producto.id != id));
        setCarrito(newCarrito);
    };

    const getTotalQuantity = () => {
        let total = carrito.reduce((acc, producto) => {
            return acc + producto.quantity
            }, 0)
        return total
    };

    const getTotalPrice = () => {
        let total = carrito.reduce((acc, producto) => {
            return acc + producto.price*producto.quantity
        }, 0)
        return total
    };

    const getQuantityByID = (id) => {
        let product = carrito.find((element) => element.id === id);
        return product ? product?.quantity : 1;
        // Esto se llama optional chaining
        // return product?.quantity
    }

    const data = {
        carrito,
        carritoAgregar,
        carritoVaciar,
        carritoQuitarPorID,
        getTotalQuantity,
        getTotalPrice,
        getQuantityByID
    };

    return (
        <CartContext.Provider value = {data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextComponent