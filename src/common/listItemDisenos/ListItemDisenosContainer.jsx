import { useState } from "react";
import { Divider, Grid, IconButton, ListItem, Typography } from "@mui/material"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ModalNuevoDisenoContainer from "../modalNuevoDiseno/ModalNuevoDisenoContainer";
import useDeleteDoc from "../../utils/hooks/useDeleteDoc";

const ListItemDisenosContainer = ({item, theme, smDisplay, mdDisplay, refreshItems, setRefreshItems, filterParams}) => {
    const [openModal, setOpenModal] = useState(false);

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
                        md = {2}
                    >
                        <div
                            className="tabla__imagen"
                        >
                            <img src={item.img} alt={item.title} />
                        </div>
                    </Grid>
                    <Grid
                        container
                        item
                        xs={12}
                        md={10}
                    >
                        <Grid
                        item
                        display={'center'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            xs={12}
                            sm={4}
                            md={2}
                        >
                            <Typography
                                textAlign={'center'}
                                style={{
                                    fontSize: '1.25rem',
                                    fontWeight: 'bold'
                                }}
                            >
                                {item.title}
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            display={'center'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            xs={12}
                            sm={8}
                            md={6}
                        >
                            <Typography
                                textAlign={'center'}
                                style={{
                                    opacity: '0.8'
                                }}
                            >
                                {item.tags.join(', ')}
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
                                textAlign={'center'}
                            >
                                {item.category}
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            display={'center'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            xs={3}
                            sm={4}
                            md={1}
                        >
                            <IconButton
                                color="secondary"
                                size={smDisplay ? 'large' : 'medium'}
                                onClick={()=>setOpenModal(true)}
                            >
                                <BorderColorIcon
                                    fontSize="inherit"
                                />
                            </IconButton>
                        </Grid>
                        <Grid
                            item
                            display={'center'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            xs={3}
                            sm={4}
                            md={1}
                        >
                            <IconButton
                                color="error"
                                size={smDisplay ? 'large' : 'medium'}
                                onClick={()=> {useDeleteDoc('designs', item, setRefreshItems, refreshItems)}}
                            >
                                <DeleteForeverIcon
                                    fontSize="inherit"
                                />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </ListItem>
            <Divider/>
            <ModalNuevoDisenoContainer
                theme = {theme}
                smDisplay={smDisplay}
                mdDisplay={mdDisplay}
                openModal={openModal}
                setOpenModal={setOpenModal}
                refreshItems={refreshItems}
                setRefreshItems = {setRefreshItems}
                filterParams={filterParams}
                design = {item}
            />
        </>
    )
}

export default ListItemDisenosContainer