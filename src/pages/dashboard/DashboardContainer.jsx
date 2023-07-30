import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Dashboard from "./Dashboard";
import { useSearchParams } from "react-router-dom";



const DashboardContainer = () => {
    const {theme, smDisplay} = useContext(ThemeContext)
    const [searchParams, setSearchParams] = useSearchParams()
    const [tabIndex, setTabIndex] = useState('0');
    const handleChange = (event, newValue) => {
        setTabIndex(newValue);
        setSearchParams([])
    };

    return (
        <Dashboard
            theme={theme}
            smDisplay={smDisplay}
            tabIndex={tabIndex}
            handleChange={handleChange}
        />
    )
}

export default DashboardContainer