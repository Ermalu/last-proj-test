import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import CartContextProvider from "./contexts/cartContext";
import ProductsContextProvider from "./contexts/productsContext";
import Routing from "./Routing";

function App() {
  return (
    <CartContextProvider>
      <ProductsContextProvider>
        <BrowserRouter>
          <Header />

          <Routing />
          <Footer />
        </BrowserRouter>
      </ProductsContextProvider>
    </CartContextProvider>
  );
}

export default App;
