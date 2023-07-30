import { createContext } from "react";
import { useMediaQuery, useTheme } from "@mui/material";

export const ThemeContext = createContext();

const ThemeContextComponent = ({children}) => {
    const theme = useTheme();
    const smDisplay = useMediaQuery(theme.breakpoints.up('sm'));
    const mdDisplay = useMediaQuery(theme.breakpoints.up('md'));
    const lgDisplay = useMediaQuery(theme.breakpoints.up('lg'));
    const xlDisplay = useMediaQuery(theme.breakpoints.up('xl'));

    const data = {
        theme,
        smDisplay,
        mdDisplay,
        lgDisplay,
        xlDisplay
    };

    return (
            <ThemeContext.Provider value = {data}>
                {children}
            </ThemeContext.Provider>
    )
};

export default ThemeContextComponent;