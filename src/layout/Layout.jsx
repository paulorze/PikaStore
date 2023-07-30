import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import NavBarContainer from "./navbar/NavBarContainer"
import { Outlet } from "react-router-dom"
import FooterContainer from "./footer/FooterContainer"
import DashboardFABContainer from "./dashboardFAB/DashboardFABContainer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
    const {admin} = useContext(CartContext)

    return (
        <>
            <NavBarContainer/>
            <Outlet/>
            <FooterContainer/>
            {admin && <DashboardFABContainer/>}
            <ToastContainer />
        </>
    )
}

export default Layout