import { Divider, Grid, ListItem, Typography } from "@mui/material"

const ListItemProductosPedidosContainer = ({producto}) => {
    return (
        <>
            <ListItem>
                <Grid
                    container
                >
                    <Grid
                        item
                        display={'center'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        xs={12}
                        sm={6}
                        md={4}
                    >
                        <Typography
                            fontSize={'1.15rem'}
                            fontWeight={'bold'}
                        >
                            {producto.title}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        display={'center'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        xs={6}
                        sm={4}
                        md={2}
                    >
                        <Typography
                            style={{
                                opacity: '0.7'
                            }}
                        >
                            {producto.category}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        display={'center'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        xs={6}
                        sm={2}
                        md={2}
                    >
                        <Typography
                            style={{
                                opacity: '0.7'
                            }}
                        >
                            ${producto.price}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        display={'center'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        xs={12}
                        sm={6}
                        md={2}
                    >
                        <Typography
                            fontWeight={'bold'}
                        >
                            Cant.: {producto.quantity}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        display={'center'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        xs={12}
                        sm={6}
                        md={2}
                    >
                        <Typography
                            fontWeight={'bold'}
                        >
                            Subtotal: ${producto.quantity * producto.price}
                        </Typography>
                    </Grid>
                </Grid>
            </ListItem>
            <Divider
                component={'li'}
            />
        </>
    )
}

export default ListItemProductosPedidosContainer