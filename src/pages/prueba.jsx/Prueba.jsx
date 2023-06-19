import { Button, Paper } from "@mui/material"

const Prueba = ({funcion}) => {
    return (
        <div>
            <Paper>
                <Button>Hola, apretame</Button>
                <Button color="secondary">Hola, apretame esta</Button>
                <Button onClick={funcion}>Cambiame el tema porfas</Button>
            </Paper>
        </div>    
    )
}

export default Prueba