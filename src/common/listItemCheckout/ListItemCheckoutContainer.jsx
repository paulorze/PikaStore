import { Divider, Grid, ListItem, Typography } from "@mui/material"

const ListItemCheckoutContainer = ({product}) => {
    return (
        <>
            <ListItem>
                <Grid
                    container
                >
                    <Grid
                        item
                        xs={12}
                    >
                        <Typography
                            style={{
                                fontSize: '1.15rem',
                                fontWeight: '700'
                            }}
                        >
                            {product.title} x {product.quantity}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        display={'flex'}
                        alignItems={'center'}
                        xs={8}
                    >
                        <Typography>
                            Subtotal:
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
                                fontSize: '1.15rem',
                                fontWeight: '700'
                            }}
                        >
                            ${product.quantity*product.price}
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

export default ListItemCheckoutContainer