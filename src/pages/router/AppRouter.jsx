import { Routes, Route } from "react-router-dom";
import { routes } from "./menuRoutes";
import Layout from "../../layout/Layout";
import ProtectedRoutes from "./ProtectedRoutes";
import DashboardContainer from "../dashboard/DashboardContainer";
import Error404Container from "../error404/Error404Container";

const AppRouter = () => {
    return (
        <Routes>
            <Route element={<Layout/>}>
                {(routes).map(({key, path, Element})=>(
                    <Route
                        key={key}
                        path={path}
                        element={<Element />}
                    />
                ))}
            </Route>
            <Route element={<ProtectedRoutes/>} >
                <Route path="/dashboard" element={<DashboardContainer/>} />
            </Route>
            <Route path='/*' element={<Error404Container/>} />
        </Routes>
    )
}

export default AppRouter