import { Fab } from "@mui/material";
import NavigationIcon from '@mui/icons-material/Navigation';
import { Link } from "react-router-dom";


const DashboardFABContainer = () => {
    return (
        <Link
            to='/dashboard'
        >
            <Fab
                color="secondary"
                variant="extended"
                sx={{
                    position: 'fixed',
                    bottom: '20px',
                    left: '20px'
                }}
            >
                <NavigationIcon/>
                Dashboard
            </Fab>
        </Link>
    )
}

export default DashboardFABContainer