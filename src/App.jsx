
import { ThemeProvider, createTheme } from "@mui/material";
import HomeContainer from "./pages/home/HomeContainer";
import { useState } from "react";

function App() {
  const themeDark = createTheme ({
    palette: {
      mode: 'dark',
      contrastThreshold: 4.5,
      primary: {
        main: '#7B2CBF',
      },
      secondary: {
        main: '#bdefa7',
      },
      background: {
        default: '#240046',
        paper: '#3C096C',
      },
      fuente: {
        main: '#000000',
      },
      fuenteSecondary: {
        main: '#FFFFFF'
      }
    }
  })
  const themeLight = createTheme ({
    palette: {
      contrastThreshold: 4.5,
      primary: {
        main: '#5A189A',
      },
      secondary: {
        main: '#bdefa7',
      },
      background: {
        default: '#C77DFF',
        paper: '#E0AAFF',
      },
      fuente: {
        main: '#FFFFFF'
      },
      fuenteSecondary: {
        main: '#000000'
      }
    }
  })

  const [theme, setTheme] = useState(true)
  const cambiarTema = ()=> {
    setTheme(!theme)
  }

  return (
    <ThemeProvider theme={theme ? themeLight : themeDark}>
      <HomeContainer cambiarTema = {cambiarTema} tema = {theme}/>
    </ThemeProvider>
  )
}

export default App
