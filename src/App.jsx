import { BrowserRouter } from "react-router-dom";
import AppRouter from "./pages/router/AppRouter";
import CartContextComponent from "./context/CartContext";

function App() {
  return (
      <BrowserRouter>
        <CartContextComponent>
          <AppRouter/>
        </CartContextComponent>
      </BrowserRouter>
  )
}

export default App
