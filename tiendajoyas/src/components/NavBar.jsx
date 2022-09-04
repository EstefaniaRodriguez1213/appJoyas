import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';
import '../App.css';

function NavBar() {
  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/productos"><img className='logo' src="img/tujoyita.png"></img></Link>
          <Link to="/productos"><p>Ver todo</p></Link>
          <Link to="/categoria/aros"><p>Aros</p></Link>
          <Link to="/categoria/cadenitas"><p>Cadenitas</p></Link>
            <CartWidget/>
        </Container>
      </Navbar>
  );
}

export default NavBar;