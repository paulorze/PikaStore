import { useTheme } from "@mui/material"
import About from "./About";

const AboutContainer = () => {
    const theme = useTheme();

    return (
        <About
            theme = {theme}
        />
    )
}

export default AboutContainer