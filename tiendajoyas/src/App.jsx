import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <ItemListContainer></ItemListContainer>
      <ItemDetailContainer></ItemDetailContainer>
    </div>
  );
}

export default App;
