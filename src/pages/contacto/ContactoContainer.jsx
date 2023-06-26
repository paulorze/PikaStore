import { useTheme } from "@mui/material"
import Contacto from "./Contacto";

const ContactoContainer = () => {
    const theme = useTheme();
    return (
        <Contacto
            theme = {theme}
        />
    )
}

export default ContactoContainer