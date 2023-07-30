import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { CartContext } from "../../context/CartContext";
import { useFormik } from 'formik';
import * as Yup from "yup";
import { toast } from 'react-toastify';
import Login from "./Login";
import { useNavigate } from "react-router-dom";

const LoginContainer = () => {
    const {theme} = useContext(ThemeContext)
    const {setAdmin} = useContext(CartContext)
    const [showUser, setShowUser] = useState(false)
    const [showPass, setShowPass] = useState(false)
    const [invalidData, setInvalidData] = useState(false)
    const navigate = useNavigate()
    const toastLogin = () => {
        toast.success(`Bienvenido de nuevo ^-^`, {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    };

    const {handleSubmit, handleChange, errors} = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        onSubmit: (data) => {
            if (data.username === import.meta.env.VITE_USER && data.password === import.meta.env.VITE_PW){
                setAdmin(true);
                setInvalidData(false);
                toastLogin();
                navigate('/dashboard')
            }   else {
                setInvalidData(true);
            };
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Este campo es obligatorio"),
            password: Yup.string().required("Este campo es obligatorio"),
        }),
        validateOnChange: false
    })


    return (
        <Login
            theme = {theme}
            showUser = {showUser}
            setShowUser = {setShowUser}
            showPass = {showPass}
            setShowPass = {setShowPass}
            invalidData = {invalidData}
            handleSubmit = {handleSubmit}
            handleChange = {handleChange}
            errors = {errors}
        />
    )
}

export default LoginContainer