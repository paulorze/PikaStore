import { ImageList, Paper, Typography } from "@mui/material";
import ItemFilterContainer from "../../common/itemFilter/ItemFilterContainer";
import GalleryContainer from "../../common/gallery/GalleryContainer";
import './Tattoo.css';


const Tattoo = ({theme, desktop, tablet, foundItems, findItems, filterItems, filteredItems, parametroBusqueda, modificarParametroBusqueda, resetItems, filterParams}) => {
    return (
        <>
            <section
                className="tattoo__section"
                style={{
                    backgroundColor : theme.palette.background.default
                }}
            >
                <Paper
                    className="tattoo__cabecera"
                >
                    <h1
                        className="tattoo__cabecera__titulo"
                    >
                        Pika | Diseños
                    </h1>
                    <Typography
                        className="tattoo__cabecera__texto"
                    >
                        Podras ver todos los diseños para tatuajes que tengo disponibles. Cada tatuaje que hago tiene un diseño &uacute;nico y bajo ning&uacute;n concepto los vuelvo a repetir.
                        Si te gust&oacute; alguno, ponete en contacto conmigo para reservar un turno y hacerlo tuyo para siempre.
                    </Typography>
                    <ItemFilterContainer
                        findItems = {findItems}
                        filterItems = {filterItems}
                        parametroBusqueda = {parametroBusqueda}
                        modificarParametroBusqueda = {modificarParametroBusqueda}
                        resetItems = {resetItems}
                        filterParams={filterParams}
                    /> 
                </Paper>
            </section>
            <section
                className="tattoo__section"
                style={{
                    backgroundColor : theme.palette.background.default
                }}
            >
                <Paper className="tattoo__cuerpo">
                    <ImageList
                        variant="masonry"
                        gap={8}
                        cols = {desktop ? 3 : tablet ? 2 : 1}
                    >
                        {(filteredItems.length >= 1 ? filteredItems : foundItems).map((design)=>(
                            <GalleryContainer
                                design = {design}
                            />
                        ))}
                    </ImageList>
                </Paper>
            </section>
        </>
    )
}

export default Tattoo