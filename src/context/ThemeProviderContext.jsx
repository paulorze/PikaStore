import { createContext, useState } from "react";
import { ThemeProvider } from "@mui/material";
import { themeDark, themeLight } from '../themes';


export const ThemeProviderContext = createContext();

const ThemeProviderContextComponent = ({children}) => {
    const [temaClaro, setTemaClaro] = useState(true);
    const cambiarTema = ()=> {
        setTemaClaro(!temaClaro)
    };

    const data = {
        temaClaro,
        cambiarTema
    };

    return (
        <ThemeProviderContext.Provider value={data}>
            <ThemeProvider
                theme = {temaClaro ? themeLight : themeDark}
            >
                {children}
            </ThemeProvider>
        </ThemeProviderContext.Provider>

    )
};

export default ThemeProviderContextComponent;