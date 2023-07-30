import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import About from "./About";

const AboutContainer = () => {
    const {theme} = useContext(ThemeContext)

    return (
        <About
            theme = {theme}
        />
    )
}

export default AboutContainer