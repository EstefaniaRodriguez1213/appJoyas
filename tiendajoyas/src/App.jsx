import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Carrousel from "./components/Carrousel";
import CartView from "./components/CartView";

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Carrousel></Carrousel>}></Route>
          <Route path="/productos" element={<ItemListContainer></ItemListContainer>}>
          </Route>
          <Route path="/categoria/:categoria" element={<ItemListContainer></ItemListContainer>}>
          </Route>
          <Route path="/detalles/:id" element={<ItemDetailContainer></ItemDetailContainer>}>
          </Route>
          <Route path="/cart" element={<CartView></CartView>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
