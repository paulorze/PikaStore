import HomeContainer from '../../pages/home/HomeContainer';
import TattooContainer from '../../pages/tattoo/TattooContainer';
import AboutContainer from '../../pages/about/AboutContainer';
import StoreContainer from '../../pages/store/StoreContainer';
import ContactoContainer from '../../pages/contacto/ContactoContainer';
import CartContainer from '../../pages/cart/CartContainer';
import ItemDetailContainer from "../../pages/itemDetail/ItemDetailContainer";
import CheckoutContainer from '../checkout/CheckoutContainer';
import Login from '../login/LoginContainer';

export const routes = [
    {
        key: 'Home', 
        path : '/',
        Element: HomeContainer
    },    
    {
        key: 'Tattoo', 
        path : '/tattoo',
        Element: TattooContainer
    },
    {
        key: 'About', 
        path : '/about',
        Element: AboutContainer
    },
    {
        key: 'Store', 
        path : '/store',
        Element: StoreContainer
    },
    {
        key: 'Contacto', 
        path : '/contacto',
        Element: ContactoContainer
    },
    {
        key: 'Cart', 
        path : '/cart',
        Element: CartContainer
    },
    {
        key: 'Checkout',
        path: '/checkout',
        Element: CheckoutContainer
    },
    {
        key: 'Product:ID', 
        path : '/product/:id',
        Element: ItemDetailContainer
    },
    {
        key: 'Login', 
        path : '/login',
        Element: Login
    }
]