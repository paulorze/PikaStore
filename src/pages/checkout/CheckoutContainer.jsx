import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { serverTimestamp } from 'firebase/firestore';
import useAddDoc from '../../utils/hooks/useAddDoc';
import useUpdateDoc from '../../utils/hooks/useUpdateDoc';
import Checkout from './Checkout';

const CheckoutContainer = () => {
    const {theme} = useContext(ThemeContext)
    const {carrito, carritoVaciar, getTotalPrice} = useContext(CartContext);
    const navigate = useNavigate();

    const {handleSubmit, handleChange, errors} = useFormik({
        initialValues: {
            name: "",
            mail: "",
            postalCode: "",
            phone: ""
        },
        onSubmit: (data) => {
            let total = getTotalPrice();
            let order = {
                buyer: data,
                items : carrito,
                total,
                date : serverTimestamp()
            };
            useAddDoc('orders', order, navigate, carritoVaciar);
            carrito.forEach((producto)=>{
                useUpdateDoc('products',producto.id, {stock: producto.stock - producto.quantity})
            });
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Este campo es obligatorio").min(5,"Su nombre debe contener al menos 5 caracteres").max(20, "Su nombre no puede contener mas de 20 caracteres"),
            mail: Yup.string().required("Por favor, ingrese un mail válido").email("Por favor, ingrese un mail válido"),
            postalCode: Yup.string().required("Este campo es obligatorio"),
            phone: Yup.string().required("Este campo es obligatorio")
        }),
        validateOnChange: false
    })

    return (
        <Checkout
            theme = {theme}
            carrito = {carrito}
            getTotalPrice = {getTotalPrice}
            handleSubmit = {handleSubmit}
            handleChange = {handleChange}
            errors = {errors}
        />
    )
}

export default CheckoutContainer