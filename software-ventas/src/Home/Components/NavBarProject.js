
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import hessLogo from "./hessLogo.jpeg";
import { LoginButton } from '../Pages/Login';
import { LogoutButton } from '../Pages/Logout';
import { Profile } from '../Pages/Profile';
import { useAuth0 } from '@auth0/auth0-react';



const NavBarProject = () =>{
    const {isAuthenticated,loginWithRedirect,logout}=useAuth0();
    return(
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>

        <Navbar.Brand href="/">
            <img  src={hessLogo} width="100" height="40" alt="Logo Hess" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/crearPro">Crear producto</NavDropdown.Item>
                <NavDropdown.Item href="/Productos">Administrar productos</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Ventas" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/CrearVenta">Crear venta</NavDropdown.Item>
                <NavDropdown.Item href="/GestionarVentas">Gestionar ventas</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Admin">Usuarios</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link href="#deets">DevTeams1</Nav.Link>
            <Nav.Link  href="">
                {isAuthenticated ? 
                <>
                <Profile/>
                <LogoutButton/>
               
                </>
                :<LoginButton/>}
                
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    );
}

export default NavBarProject;