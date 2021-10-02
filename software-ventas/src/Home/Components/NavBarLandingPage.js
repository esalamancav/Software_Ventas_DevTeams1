
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';



const NavBarLandingPage= ()=>{
    return(
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">
            <img alt="Logo" src="./logomision.png" width="100" height="40"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
        <Navbar.Collapse className="justify-content-end">
            <Nav.Link eventKey={2} href="#memes">
                Login
            </Nav.Link>
        </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    );
}

export default NavBarLandingPage;