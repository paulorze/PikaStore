import { Link } from 'react-router-dom';
import { Button, Grid, List, Paper, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ListItemCheckoutContainer from '../../common/listItemCheckout/ListItemCheckoutContainer';
import './Checkout.css';

const Checkout = ({theme, carrito, getTotalPrice, handleSubmit, handleChange, errors}) => {
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
                    <Grid
                        container
                    >
                        <Grid
                            item
                            xs={12}
                            md={8}
                        >
                            <form 
                                className='checkout__form'
                                onSubmit={handleSubmit}
                            >
                                <TextField
                                    style={{
                                        margin: '1rem',
                                        width: '50vw'
                                    }}
                                    error={errors.name ? true : false}
                                    helperText = {errors.name}
                                    size='small'
                                    variant='outlined'
                                    type= {'text'}
                                    label= {'Nombre'}
                                    name= {'name'}
                                    placeholder= {'Ingrese su nombre'} 
                                    onChange={handleChange}
                                />
                                <TextField
                                    style={{
                                        margin: '1rem',
                                        width: '50vw'
                                    }}
                                    error={errors.mail ? true : false}
                                    helperText = {errors.mail}
                                    size='small'
                                    variant='outlined'
                                    type= {'email'}
                                    label= {'Mail'}
                                    name= {'mail'}
                                    placeholder= {'Ingrese su mail'} 
                                    onChange={handleChange}
                                />
                                <TextField
                                    style={{
                                        margin: '1rem',
                                        width: '50vw'
                                    }}
                                    error={errors.postalCode ? true : false}
                                    helperText = {errors.postalCode}
                                    size='small'
                                    variant='outlined'
                                    type= {'text'}
                                    label= {'Código Postal'}
                                    name= {'postalCode'}
                                    placeholder= {'Ingrese su código postal'} 
                                    onChange={handleChange}
                                />
                                <TextField
                                    style={{
                                        margin: '1rem',
                                        width: '50vw'
                                    }}
                                    error={errors.phone ? true : false}
                                    helperText = {errors.phone}
                                    size='small'
                                    variant='outlined'
                                    type= {'text'}
                                    label= {'Teléfono'}
                                    name= {'phone'}
                                    placeholder= {'Ingrese su teléfono'} 
                                    onChange={handleChange}
                                />                        
                                <div
                                    className='checkout__botones'
                                >
                                    <Button
                                        type='submit'
                                        variant='contained'
                                        color='secondary'
                                        endIcon={<SendIcon/>}
                                        style={{
                                            margin:'1rem'
                                        }}
                                    >
                                        Enviar
                                    </Button>
                                    <Link
                                        to={'/cart'}
                                    >
                                        <Button
                                            type='button'
                                            variant='outlined'
                                            color='error'
                                            style={{
                                                margin:'1rem'
                                            }}
                                        >
                                            Cancelar
                                        </Button>
                                    </Link>
                                </div>
                            </form>
                        </Grid>
                        <Grid
                            item
                            className='checkout__cart'
                            xs={12}
                            md={4}
                        >
                            <List>
                                {carrito.map(product=>(
                                    <ListItemCheckoutContainer
                                        key={product.id}
                                        product={product}
                                    />
                                ))}
                            </List>
                            <Grid
                                container
                                style={{
                                    padding: '1rem'
                                }}
                            >
                                <Grid
                                    item
                                    display={'flex'}
                                    alignItems={'center'}
                                    xs={8}
                                >
                                    <Typography
                                        style={{
                                            fontSize: '1.5rem',
                                            fontWeight: 700
                                        }}
                                    >
                                        Total:
                                    </Typography>
                                </Grid>
                                <Grid
                                    item
                                    display={'flex'}
                                    alignItems={'center'}
                                    justifyContent={'flex-end'}
                                    xs={4}
                                >
                                    <Typography
                                        style={{
                                            fontSize: '1.5rem',
                                            fontWeight: 700
                                        }}
                                    >
                                        ${getTotalPrice()}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </section>
        </main>
    )
}

export default Checkout