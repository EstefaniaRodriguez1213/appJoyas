import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Tu Joyita</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Pagina Principal</Nav.Link>
            <Nav.Link href="#features">Artículos</Nav.Link>
            <Nav.Link href="#pricing">Sobre Nosotros</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default NavBar;