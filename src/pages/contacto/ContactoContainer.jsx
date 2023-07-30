import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Contacto from "./Contacto";

const ContactoContainer = () => {
    const {theme} = useContext(ThemeContext)
    return (
        <Contacto
            theme = {theme}
        />
    )
}

export default ContactoContainer