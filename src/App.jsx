import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeContainer from './pages/home/HomeContainer';
import Tattoo from './pages/tattoo/Tattoo';
import StoreContainer from './pages/store/StoreContainer';
import AboutContainer from './pages/about/AboutContainer';
import ContactoContainer from './pages/contacto/ContactoContainer';
import CartContainer from './pages/cart/CartContainer';
import NavBarContainer from './layout/navbar/NavBarContainer';
import ItemDetailContainer from "./pages/itemDetail/ItemDetailContainer";
import FooterContainer from "./layout/footer/FooterContainer";

/* RECORDAR PASAR LA FUNCION AGREGAR AL CARRITO COMO PROP!!!!! */
// AGREGAR EL FOOTER?????

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route element={<NavBarContainer/>}>
            <Route path='/' element={<HomeContainer/>} />
            <Route path='/tattoo' element={<Tattoo/>} />
            <Route path='/about' element={<AboutContainer/>} />
            <Route path='/store/' element={<StoreContainer/>} />
            <Route path='/contacto' element={<ContactoContainer/>} />
            <Route path='/cart' element={<CartContainer/>} />
            <Route path='/product/:id' element={<ItemDetailContainer/>} />
            <Route path='/store/:param' element={<StoreContainer/>} />
            <Route path='/store/:param' element={<StoreContainer/>} />
          </Route>
          <Route path='/*' element={<h1>Error 404</h1>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
