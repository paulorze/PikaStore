import { Button, Grid, List } from "@mui/material"
import ItemFilterContainer from "../itemFilter/ItemFilterContainer"
import SkeletonTabContainer from "../skeletonTab/SkeletonTabContainer";
import ListItemDisenosContainer from "../listItemDisenos/ListItemDisenosContainer";
import ModalNuevoDisenoContainer from "../modalNuevoDiseno/ModalNuevoDisenoContainer";
import './TabDisenos.css'

const TabDisenos = ({filterParams, searchParams, setSearchParams, items, theme, smDisplay, mdDisplay, lgDisplay, refreshItems, setRefreshItems, openModal, setOpenModal}) => {
    return (
        <>
            <Grid
                container
            >
                <Grid
                    item
                    xs={12}
                    sm={10}
                >
                    <ItemFilterContainer
                        filterParams={filterParams}
                        searchParams={searchParams}
                        setSearchParams={setSearchParams}
                    />
                </Grid>
                <Grid
                    item
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    xs={12}
                    sm={2}
                >
                    <Button
                        variant="contained"
                        color="secondary"
                        size={lgDisplay ? 'large' : 'small'}
                        onClick={()=>setOpenModal(true)}
                    >
                        Nuevo Diseño
                    </Button>
                </Grid>
            </Grid>
            {(items.length === 0 && searchParams.size === 0) 
                ? (<SkeletonTabContainer/>) : (
                <List
                    style={{
                        width: '100%',
                    }}
                >
                    {items.map((item)=> (
                        <ListItemDisenosContainer 
                            key={item.id} 
                            item = {item}
                            theme = {theme}
                            smDisplay = {smDisplay}
                            mdDisplay = {mdDisplay}
                            refreshItems={refreshItems} 
                            setRefreshItems={setRefreshItems} 
                            filterParams={filterParams}
                        />))}
                </List>
            )}
            <ModalNuevoDisenoContainer
                theme = {theme}
                smDisplay = {smDisplay}
                mdDisplay = {mdDisplay}
                openModal={openModal}
                setOpenModal={setOpenModal}
                refreshItems={refreshItems}
                setRefreshItems={setRefreshItems}
                filterParams = {filterParams}
            />
        </>
    )
}

export default TabDisenos