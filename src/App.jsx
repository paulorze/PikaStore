import { BrowserRouter } from "react-router-dom";
import AppRouter from "./pages/router/AppRouter";
import CartContextComponent from "./context/CartContext";
import ThemeContextComponent from "./context/ThemeContext";
import ThemeProviderContextComponent from "./context/ThemeProviderContext";

function App() {
  return (
      <BrowserRouter>
        <ThemeProviderContextComponent>
          <ThemeContextComponent>
            <CartContextComponent>
              <AppRouter/>
            </CartContextComponent>
          </ThemeContextComponent>
        </ThemeProviderContextComponent>
      </BrowserRouter>
  )
}

export default App
