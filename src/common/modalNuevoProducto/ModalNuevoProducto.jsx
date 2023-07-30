import { Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

const ModalNuevoProducto = ({theme, smDisplay, mdDisplay, openModal, setOpenModal, filterParams, product, handleSubmit, handleChange, errors}) => {
    return (
        <Modal
            open = {openModal}
        >
            <Box
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: (mdDisplay? '50vw' : smDisplay ? '80vw' : '90vw'),
                    backgroundColor: theme.palette.background.paper,
                    borderRadius: '4px',
                    boxShadow: 24,
                    padding: '1rem',
                }}
            >
                <form
                    className='nuevodiseno__form'
                    onSubmit={handleSubmit}
                >
                    <TextField
                        style={{
                            margin: '1rem',
                            width: '80%'
                        }}
                        error={errors.title ? true : false}
                        helperText = {errors.title}
                        size='small'
                        variant='outlined'
                        type= {'text'}
                        label= {'Nombre'}
                        name= {'title'}
                        placeholder= {'Ingrese nombre del producto'}
                        defaultValue={product ? product.title : ''}
                        onChange={handleChange}
                    />
                    <FormControl
                    fullWidth
                        style={{
                            width: '80%',
                            margin: '1rem'
                        }}
                    >
                        <InputLabel
                            size='small'
                            id='categoria-label'
                        >
                            Categoria
                        </InputLabel>
                        <Select
                            error={errors.category ? true : false}
                            size='small'
                            variant='outlined'
                            label= {'Categoria'}
                            labelId='categoria-label'
                            name= {'category'}
                            placeholder= {'Ingrese categoria del producto'}
                            defaultValue={product ? product.category : ''}
                            onChange={handleChange}
                        >
                            {filterParams.map(category=>(
                                <MenuItem
                                    key={category.key}
                                    value={category.categoria}
                                >
                                    {category.categoria}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField
                        style={{
                            margin: '1rem',
                            width: '80%'
                        }}
                        error={errors.tags ? true : false}
                        helperText = {errors.tags}
                        size='small'
                        variant='outlined'
                        type= {'text'}
                        label= {'Tags'}
                        name= {'tags'}
                        placeholder= {'Ingrese las etiquetas del producto separadas por una coma'}
                        defaultValue={product ? product.tags : ''}
                        onChange={handleChange}
                    />
                    <div
                        style={{
                            margin: '1rem',
                            width: '80%',
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        <TextField
                            style={{
                                width: '45%',
                            }}
                            error={errors.price ? true : false}
                            helperText = {errors.price}
                            size='small'
                            variant='outlined'
                            type= {'text'}
                            label= {'Precio'}
                            name= {'price'}
                            placeholder= {'Ingrese precio del producto'}
                            defaultValue={product ? product.price : ''}
                            onChange={handleChange}
                        />
                        <TextField
                            style={{
                                width: '45%',
                            }}
                            error={errors.stock ? true : false}
                            helperText = {errors.stock}
                            size='small'
                            variant='outlined'
                            type= {'text'}
                            label= {'Stock'}
                            name= {'stock'}
                            placeholder= {'Ingrese stock del producto'}
                            defaultValue={product ? product.stock : ''}
                            onChange={handleChange}
                        />
                    </div>
                    <TextField
                        style={{
                            margin: '1rem',
                            width: '80%'
                        }}
                        error={errors.description ? true : false}
                        helperText = {errors.description}
                        size='small'
                        variant='outlined'
                        type= {'text'}
                        label= {'Descripción'}
                        name= {'description'}
                        placeholder= {'Ingrese descripción del producto'}
                        defaultValue={product ? product.description : ''}
                        onChange={handleChange}
                    />
                    <TextField
                        style={{
                            margin: '1rem',
                            width: '80%'
                        }}
                        error={errors.img ? true : false}
                        helperText = {errors.img}
                        size='small'
                        variant='outlined'
                        type= {'text'}
                        label= {'Imagen'}
                        name= {'img'}
                        placeholder= {'Ingrese las dirección de la imagen del producto'}
                        defaultValue={product ? product.img : ''}
                        onChange={handleChange}
                    />
                    <div
                        style={{
                            width: '80%',
                            display: 'flex',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            flexWrap: 'wrap'
                        }}
                    >
                        <Button
                            variant='contained'
                            color='secondary'
                            type='submit'
                            endIcon={<SendIcon/>}
                            style={{
                                marginTop: '1rem'
                            }}
                        >
                            Confirmar Producto
                        </Button>
                        <Button
                            variant='outlined'
                            color='error'
                            type='button'
                            onClick={()=>{setOpenModal(false)}}
                            style={{
                                marginTop: '1rem'
                            }}
                        >
                            Cancelar
                        </Button>
                    </div>
                </form>
            </Box>
        </Modal>
    )
}

export default ModalNuevoProducto