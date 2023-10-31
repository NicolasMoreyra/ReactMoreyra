import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

const NavBarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><h3><strong>STREETWEAR</strong></h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            
            <NavDropdown title="Zapatillas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Adidas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Converse</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Nike</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">New Balance</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Puma</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Vans</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">Bapesta</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Contacto</Nav.Link>
          </Nav>
          <div><CartWidgetComponent/></div>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    
    
  );
}

export default NavBarComponent;