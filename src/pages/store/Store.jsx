import ItemFilterContainer from "../../common/itemFilter/ItemFilterContainer"
import CardContainer from "../../common/card/CardContainer";
import { Paper, Typography } from "@mui/material";
import SkeletonStoreContainer from "../../common/skeletonStore/SkeletonStoreContainer";
import './Store.css';

const Store = ({theme, filterParams, searchParams, setSearchParams, items}) => {
    return (
        <main
            style={{
                backgroundColor: theme.palette.background.default
            }}
        >   
            <section
                className="store__section"
                style={{
                    backgroundColor : theme.palette.background.default
                }}
            >
                <Paper
                    className="store__cabecera"
                >
                    <ItemFilterContainer
                        filterParams = {filterParams}
                        searchParams = {searchParams}
                        setSearchParams = {setSearchParams}
                    />
                </Paper>
            </section>
            <section
                className="store__section"
                style={{
                    backgroundColor : theme.palette.background.default
                }}
            >
                <Paper
                    className="store__cuerpo"
                >   
                    {(items.length === 0 && searchParams.size == 0) ? (
                        <SkeletonStoreContainer/>
                    ) : (items.length > 0) ? (
                        (items).map((product)=>(
                            product.stock >= 1 &&
                                <CardContainer
                                    key={product.id}
                                    product={product}
                                />
                    ))) : <Typography> Tu búsqueda no arrojó ningún resultado. </Typography> 
                    }
                </Paper>
            </section>
        </main>
    )
}

export default Store