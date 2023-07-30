import { ImageList, Paper, Typography } from "@mui/material";
import ItemFilterContainer from "../../common/itemFilter/ItemFilterContainer";
import GalleryContainer from "../../common/gallery/GalleryContainer";
import './Tattoo.css';
import SkeletonTattooContainer from "../../common/skeletonTattoo/SkeletonTattooContainer";

const Tattoo = ({theme, smDisplay, mdDisplay, lgDisplay, xlDisplay, filterParams, searchParams, setSearchParams, items}) => {
    return (
        <main
            style={{
                backgroundColor: theme.palette.background.default
            }}
        >
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
                        style={{
                            marginBottom: '1rem'
                        }}
                    >
                        Podras ver todos los diseños para tatuajes que tengo disponibles. Cada tatuaje que hago tiene un diseño &uacute;nico y bajo ning&uacute;n concepto los vuelvo a repetir.
                        Si te gust&oacute; alguno, ponete en contacto conmigo para reservar un turno y hacerlo tuyo para siempre.
                    </Typography>
                    <ItemFilterContainer
                        filterParams={filterParams}
                        searchParams={searchParams}
                        setSearchParams={setSearchParams}
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
                    {(items.length === 0 && searchParams.size == 0) ? (
                        <SkeletonTattooContainer/>
                    ) : (items.length > 0) ? (
                        <ImageList
                        variant="masonry"
                        gap={8}
                        cols = {xlDisplay ? 5 : lgDisplay? 4 : mdDisplay ? 3 : smDisplay ? 2 : 1}
                        >
                            {items.map((design)=>(
                                <GalleryContainer
                                    key={design.id}
                                    design = {design}
                                />
                            ))}
                        </ImageList>
                    ) : <Typography> Tu búsqueda no arrojó ningún resultado. </Typography> 
                    }
                </Paper>
            </section>
        </main>
    )
}

export default Tattoo