import { useContext } from 'react'
import { useLocation, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AuthContext } from '../../Context/AuthContext'

export const NavBar = () => {
  const { login, onLogout, userData } = useContext(AuthContext);
  const location = useLocation();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {login && (<>
          <Navbar.Brand as={Link} to={'/home'} >APIRest-Coder</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={'/home'}>Home</Nav.Link>
              <Nav.Link onClick={onLogout}>Logout</Nav.Link>
              <NavDropdown title="Acciones" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to={'/perfil'}>Perfil usuario</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={'/producto/guardar'}>
                  Crear Producto
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Facturacion</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </>)}
        {!login && (
          <>
            <Navbar.Brand as={Link} to={'/'} >APIRest-Coder</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={'/home'}>Home</Nav.Link>
                <Nav.Link as={Link} to={'/'}>Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </>
        )}
      </Container>
    </Navbar>
  );
}