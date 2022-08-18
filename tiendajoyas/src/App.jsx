import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
     <NavBar></NavBar>
     <ItemListContainer nombre="Profe"></ItemListContainer>
    </div>
  );
}

export default App;
