import { themeDark, themeLight } from './themes';
import { ThemeProvider } from "@mui/material";
import { useState } from "react";
import Main from './pages/main/Main';


function App() {
  const [theme, setTheme] = useState(true)
  const cambiarTema = ()=> {
    setTheme(!theme)
  }

  const [carrito, setCarrito] = useState([]);
  const carritoAgregar = (producto,cantidad)=>{
      const data = {
          ...producto,
          quantity: cantidad
      };
      setCarrito(current => [...current, data]);
  };

  return (
    <ThemeProvider
      theme={theme ? themeLight : themeDark}
    >
      <Main
        carrito = {carrito}
        carritoAgregar = {carritoAgregar}
        cambiarTema = {cambiarTema}
        tema = {theme}
      />
    </ThemeProvider>
  )
}

export default App
