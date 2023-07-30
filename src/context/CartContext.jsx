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

    const getQuantityByID = (id) => {
        let product = carrito.find((element) => element.id === id);
        return product ? product?.quantity : 1;
        // Esto se llama optional chaining
        // return product?.quantity
    };

    const [carrito, setCarrito] = useState((JSON.parse(localStorage.getItem('carrito'))) || []);
    const carritoAgregar = (producto,cantidad)=>{
        const data = {
            ...producto,
            quantity: cantidad
        };
        let productoEnCarrito = carrito.some((elemento)=> elemento.id === producto.id);
        if (productoEnCarrito) {
            let newCarrito = carrito.map(elemento => {
                if (elemento.id === producto.id) {
                    toastAgregar(elemento.title, cantidad)
                    return {...elemento, quantity: cantidad}
                } else {
                    return elemento
                }
            })
            setCarrito(newCarrito)
            localStorage.setItem('carrito',JSON.stringify(newCarrito));
        } else {
            toastAgregar(producto.title, cantidad)
            let newCarrito = [...carrito, data]
            setCarrito(newCarrito);
            localStorage.setItem('carrito',JSON.stringify(newCarrito));
        };
    };

    const carritoVaciar = ()=> {
        setCarrito([]);
        localStorage.clear();
    };

    const carritoVaciarConfirmar = ()=> {
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
                localStorage.clear();
                Swal.fire({
                    title: 'Carrito vacío',
                    text: 'El carrito ha sido vaciado correctamente.',
                    icon: 'success',
                    background: '#7B2CBF',
                    color: '#ffffff',
                    confirmButtonColor: '#bdefa7',
                });
            }
        })
    };

    const carritoQuitarPorID = (id)=> {
        let newCarrito = carrito.filter(producto => (producto.id != id));
        setCarrito(newCarrito);
        localStorage.setItem('carrito',JSON.stringify(newCarrito));
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

    const [admin, setAdmin] = useState(false)

    const data = {
        carrito,
        carritoAgregar,
        carritoVaciar,
        carritoVaciarConfirmar,
        carritoQuitarPorID,
        getTotalQuantity,
        getTotalPrice,
        getQuantityByID,
        admin,
        setAdmin
    };

    return (
        <CartContext.Provider value = {data}>
            {children}
        </CartContext.Provider>
    )
};

export default CartContextComponent