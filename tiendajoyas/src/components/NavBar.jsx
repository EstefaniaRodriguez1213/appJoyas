import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';
import '../App.css';
import {CartContext} from './CartContext';
import {useContext} from 'react'

function NavBar() {
  const {cantidadArticulosCarrito} = useContext(CartContext);
  console.log(cantidadArticulosCarrito);
  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/"><img className='logo' src="img/tujoyita.png"></img></Link>
          <Link style={{ textDecoration: 'inherit'}} to="/productos"><p>Ver todo</p></Link>
          <Link style={{ textDecoration: 'inherit'}} to="/categoria/aros"><p>Aros</p></Link>
          <Link style={{ textDecoration: 'inherit'}} to="/categoria/cadenitas"><p>Cadenitas</p></Link>
           {cantidadArticulosCarrito() > 0 && ( <CartWidget/>) } 
  
        </Container>
      </Navbar>
  );
}

export default NavBar;