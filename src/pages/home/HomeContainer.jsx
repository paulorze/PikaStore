import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import Home from "./Home"

const HomeContainer = () => {
    const {theme} =useContext(ThemeContext)
    return (
        <Home
            theme = {theme}
        />
    )
}

export default HomeContainer