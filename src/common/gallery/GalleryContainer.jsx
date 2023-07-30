import { useState } from "react";
import Gallery from "./Gallery";


const GalleryContainer = ({design}) => {
    const [backdropOpen, setBackdropOpen] = useState(false);
    const handleBackdrop = ()=> {
        setBackdropOpen(!backdropOpen)
    };

    return (
        <Gallery
            design = {design}
            backdropOpen = {backdropOpen}
            handleBackdrop = {handleBackdrop}
        />
    )
}

export default GalleryContainer