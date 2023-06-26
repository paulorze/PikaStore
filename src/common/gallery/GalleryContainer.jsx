import { useState } from "react";
import { Backdrop, IconButton, ImageListItem, ImageListItemBar } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import './Gallery.css';

const GalleryContainer = ({design}) => {
    const [backdropOpen, setBackdropOpen] = useState(false);
    const handleBackdrop = ()=> {
        setBackdropOpen(!backdropOpen)
    };

    return (
        <>
            <ImageListItem
                onClick = {handleBackdrop}
                className="gallery__item"
            >
                <img 
                    src={`${design.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${design.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={design.title}
                    loading="lazy"
                />
                <ImageListItemBar
                    title={design.title}
                    actionIcon={
                        <IconButton
                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                            aria-label={`info about ${design.title}`}
                        >
                            <InfoIcon />
                        </IconButton>
                    }
                />
            </ImageListItem>
            <Backdrop
                open = {backdropOpen}
                onClick = {handleBackdrop}
                style={{
                    zIndex : 5
                }}
            >
                <img 
                    src={design.img} 
                    alt={design.title} 
                    style={{
                        maxHeight : '90vh',
                        maxWidth : '90vw'
                    }}
                />
            </Backdrop>
        </>
    )
}

export default GalleryContainer