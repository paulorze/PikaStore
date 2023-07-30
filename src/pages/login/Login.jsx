import { Button, IconButton, InputAdornment, Paper, TextField } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import './Login.css';

const Login = ({theme, showUser, setShowUser, showPass, setShowPass, invalidData, handleSubmit, handleChange,errors}) => {
    return (
        <main
            style={{
                backgroundColor: theme.palette.background.default
            }}
        >
            <section
                className="login__section"
            >
                <Paper
                    className="login__paper"
                >
                    <h1>
                        Iniciar Sesión
                    </h1>
                    <form
                        className="login__form"
                        onSubmit={handleSubmit}
                    >
                        <TextField
                            style={{
                                margin: '1rem',
                                width: '40vw'
                            }}
                            error={errors.username}
                            helperText = {errors.username}
                            size='small'
                            variant='outlined'
                            type= {showUser ? 'text' : 'password'}
                            label= {'Nombre de Usuario'}
                            name= {'username'}
                            placeholder= {'Ingrese su nombre de usuario'} 
                            onChange={handleChange}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={()=>setShowUser(!showUser)}
                                        >
                                            {showUser ? <VisibilityOffIcon/> : <VisibilityIcon/> }
                                        </IconButton>
                                    </InputAdornment>
                                    ),
                                }}
                        />
                        <TextField
                            style={{
                                margin: '1rem',
                                width: '40vw'
                            }}
                            error={errors.password}
                            helperText = {errors.password}
                            size='small'
                            variant='outlined'
                            type= {showPass ? 'text' : 'password'}
                            label= {'Contraseña'}
                            name= {'password'}
                            placeholder= {'Ingrese su contraseña'} 
                            onChange={handleChange}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={()=>setShowPass(!showPass)}
                                        >
                                            {showPass ? <VisibilityOffIcon/> : <VisibilityIcon/> }
                                        </IconButton>
                                    </InputAdornment>
                                    ),
                                }}
                        />
                        <Button
                            variant="contained"
                            color="secondary"
                            type="submit"
                        >
                            Iniciar Sesión
                        </Button>
                        {invalidData ? <h3 className="datosinvalidos">Usuario o contraseña inválidos</h3> : <h3> </h3>}
                    </form>
                </Paper>
            </section>
        </main>
    )
}

export default Login