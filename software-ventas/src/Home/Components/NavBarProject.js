
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';



const NavBarProject = () =>{
    return(
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">
            <img alt="SurtimaxLogo" src="https://www.america-retail.com/static//2019/03/Surtimax.png" width="100" height="40"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Crear producto</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Administrar productos</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Ventas" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Crear venta</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Gestionar ventas</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#features">Usuarios</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link href="#deets">DevTeams1</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
                Logout
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    );
}

export default NavBarProject;