import { createTheme } from "@mui/material";

export const themeDark = createTheme ({
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

export const themeLight = createTheme ({
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