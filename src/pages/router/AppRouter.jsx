import { Routes, Route } from "react-router-dom";
import { routes } from "./menuRoutes";
import Layout from "../../layout/Layout";

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
        <Route path='/*' element={<h1>Error 404</h1>} />
    </Routes>
    )
}

export default AppRouter