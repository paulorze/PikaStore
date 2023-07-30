import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import { Typography } from "@mui/material"
import { Link } from "react-router-dom"

const Error404Container = () => {
    const {theme} = useContext(ThemeContext)
    return (
        <main
            style={{
                height: '100vh',
                width: '100vw',
                backgroundColor: theme.palette.background.default
            }}
        >
            <Link
                to={'/'}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textDecoration: 'none',
                    textAlign: 'center'
                }}
            >
                <Typography
                    variant="h1"
                    component={'h1'}
                >
                    "Error 404"
                </Typography>
                <Typography
                    variant="h4"
                    component={'h4'}
                    style={{
                        marginBottom: '2rem'
                    }}
                >
                    Me parece que te perdiste...
                </Typography>
                <img src="https://media.tenor.com/Gv1cMkqev0wAAAAC/anime-confused.gif" alt="Confused anime girl" />
            </Link>
        </main>
    )
}

export default Error404Container