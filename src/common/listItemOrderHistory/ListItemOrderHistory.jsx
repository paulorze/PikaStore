import { Divider, Grid, List, ListItem, Typography } from "@mui/material"
import ListItemProductosPedidosContainer from "../listItemProductosPedidos/ListItemProductosPedidosContainer"

const ListItemOrderHistoryContainer = ({item}) => {
    return (
        <>
            <ListItem>
                <Grid
                    container
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Grid
                        container
                    >
                        <Grid
                            item
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            xs={12}
                            sm={6}
                            md={4}
                        >
                            <Typography
                                fontSize={'1.25rem'}
                                fontWeight={'bold'}
                            >
                                {item.buyer.name}
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            xs={12}
                            sm={6}
                            md={4}
                        >
                            <Typography
                                fontSize={'1.15rem'}
                                style={{
                                    opacity: '0.7'
                                }}
                            >
                                {item.buyer.mail}
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            xs={6}
                            md={2}
                        >
                            <Typography
                                fontSize={'1.15rem'}
                                style={{
                                    opacity: '0.7'
                                }}
                            >
                                C.P.: {item.buyer.postalCode}
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            xs={6}
                            md={2}
                        >
                            <Typography
                                fontSize={'1.15rem'}
                                style={{
                                    opacity: '0.7',
                                    textAlign: 'center'
                                }}
                            >
                                Tel.: {item.buyer.phone}
                            </Typography>
                        </Grid>
                    </Grid>
                    <List
                        style={{
                            width: '95%',
                            paddingTop: '1.5rem'
                        }}
                    >
                        <Divider
                            component={'li'}
                        />
                        {item.items.map(producto=>(
                            <ListItemProductosPedidosContainer
                                key = {producto.id}
                                producto = {producto}
                            />
                        ))}
                    </List>
                    <Grid
                        container
                    >
                        <Grid
                            item
                            display={'flex'}
                            justifyContent={'flex-end'}
                            alignItems={'center'}
                            xs={8}
                            sm={10}
                            style={{
                                padding: '1rem 0'
                            }}
                        >
                            <Typography
                                fontSize={'1.25rem'}
                                fontWeight={'bold'}
                            >
                                Total:
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            display={'flex'}
                            justifyContent={'flex-end'}
                            alignItems={'center'}
                            xs={4}
                            sm={2}
                        >
                            <Typography
                                fontSize={'1.25rem'}
                                fontWeight={'bold'}
                            >
                                ${item.total}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                    >
                        <Grid
                            item
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            xs={8}
                            style={{
                                padding: '1rem 0'
                            }}
                        >
                            <Typography
                                fontSize={'1.25rem'}
                                fontWeight={'bold'}
                            >
                                Fecha de Envío:
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            display={'flex'}
                            justifyContent={'flex-end'}
                            alignItems={'center'}
                            xs={4}
                        >
                            <Typography
                                fontSize={'1.25rem'}
                                fontWeight={'bold'}
                            >
                                {item.shippingDate.toDate().toUTCString()}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </ListItem>
            <Divider
                component={'li'}
                style={{
                    backgroundColor : 'lightgrey',
                    height: '2px',
                    marginTop: '1rem',
                    marginBottom: '1rem'
                }}
            />
        </>
    )
}

export default ListItemOrderHistoryContainer