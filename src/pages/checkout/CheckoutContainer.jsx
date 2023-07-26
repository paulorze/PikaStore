import { useNavigate } from 'react-router-dom';
import { Button, Paper, TextField, useTheme } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from "yup"
import './Checkout.css';

const CheckoutContainer = () => {
    const theme = useTheme();

    const navigate = useNavigate()

    const {handleSubmit, handleChange, errors} = useFormik({
        initialValues: {
            name: "",
            mail: "",
            address: "",
            phone: ""
        },
        onSubmit: (data) => {
            console.log(data)
            navigate('/store')
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Este campo es obligatorio").min(5,"Su nombre debe contener al menos 5 caracteres").max(20, "Su nombre no puede contener mas de 20 caracteres"),
            mail: Yup.string().required("Este campo es obligatorio").email("Por favor, ingrese un mail válido"),

        }),
        validateOnChange: false
    })

    const errorTextinput = (type, label, name, helperText)=> {
        return (
            <TextField
                style={{
                    margin: '1rem',
                    width: '50vw'
                }}
                error
                size='small'
                variant='outlined'
                type= {type}
                label= {label}
                name= {name}
                helperText= {helperText} 
                onChange={handleChange}
            />
        )
    }

    const validatedTextinput = (type, label, name, placeholder)=> {
        return (
            <TextField
                style={{
                    margin: '1rem',
                    width: '50vw'
                }}
                size='small'
                variant='outlined'
                type= {type}
                label= {label}
                name= {name}
                placeholder= {placeholder} 
                onChange={handleChange}
            />
        )
    }

    return (
        <main
            style={{
                backgroundColor: theme.palette.background.default
            }}
        >
            <section 
                className='checkout'
                style={{
                    backgroundColor: theme.palette.background.default
                }}
            >
                <Paper 
                    className='checkout__paper'
                >
                    <h1
                        className='checkout__titulo'
                    >
                        Checkout
                    </h1>
                    <form 
                        className='checkout__form'
                        onSubmit={handleSubmit}
                    >
                        {(errors.name) ? errorTextinput('text', 'Nombre', 'name', errors.name) : validatedTextinput('text', 'Nombre', 'name', 'Ingrese su nombre')}
                        {(errors.mail) ? errorTextinput('email', 'Mail', 'mail', errors.mail) : validatedTextinput('email', 'Mail', 'mail', 'Ingrese su mail')}
                        {(errors.address) ? errorTextinput('text', 'Dirección', 'address', errors.address) : validatedTextinput('text', 'Dirección', 'address', 'Ingrese su dirección')}
                        {(errors.phone) ? errorTextinput('text', 'Teléfono', 'phone', errors.phone) : validatedTextinput('text', 'Teléfono', 'phone', 'Ingrese su teléfono')}
                        <div
                            className='checkout__botones'
                        >
                            <Button
                                type='submit'
                                variant='contained'
                                color='secondary'
                            >
                                Enviar
                            </Button>
                            <Button
                                type='button'
                                variant='outlined'
                                color='error'
                            >
                                Cancelar
                            </Button>
                        </div>
                    </form>
                </Paper>
            </section>
        </main>
    )
}

export default CheckoutContainer