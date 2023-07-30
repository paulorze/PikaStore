import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import NavBarContainer from "../../layout/navbar/NavBarContainer";
import FooterContainer from "../../layout/footer/FooterContainer";
import { CartContext } from "../../context/CartContext";

const ProtectedRoutes = () => {
    const {admin} = useContext(CartContext)

    return (
        <>
            {admin
                ? (
                    <>
                        <NavBarContainer/>
                        <Outlet/>
                        <FooterContainer/>
                    </>
                    )
                : <Navigate to={'/'}/>
            }
        </>
    )
}

export default ProtectedRoutes