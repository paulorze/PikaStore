import ItemFilterContainer from "../../common/itemFilter/ItemFilterContainer"
import CardContainer from "../../common/card/CardContainer";
import { Paper } from "@mui/material";
import './Store.css';

const Store = ({theme, parametroBusqueda, modificarParametroBusqueda, filterParams, searchParams, setSearchParams, items, carritoAgregar,resetValue}) => {
    
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
                        parametroBusqueda = {parametroBusqueda}
                        modificarParametroBusqueda = {modificarParametroBusqueda}
                        filterParams = {filterParams}
                        searchParams = {searchParams}
                        setSearchParams = {setSearchParams}
                        resetValue={resetValue}
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
                    {(items).map((product)=>(
                        <CardContainer
                            key={product.id}
                            product={product}
                            carritoAgregar = {carritoAgregar}
                        />
                    ))}
                </Paper>
            </section>
        </main>
    )
}

export default Store