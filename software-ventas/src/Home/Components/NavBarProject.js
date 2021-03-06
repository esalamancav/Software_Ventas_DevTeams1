
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import logoMisionTic  from "./logoMisionTic.jpeg";
import { LoginButton } from '../Pages/Login';

import { useEffect, useState } from 'react';
import { render } from 'react-dom';




const NavBarProject = () =>{

    const [isLoggedIn,setIslogged]=useState(false);
    const setLogged=()=>{
     setIslogged(true);
     console.log("Actualizando login")
    }
    const setNotLogged=()=>{
        setIslogged(false);
        console.log("Actualizando login")
       }
       useEffect(()=>{
    const token=localStorage.getItem("token");
    if(token){
        setIslogged(true);
    }   
},[])
     if(isLoggedIn){
         
        return(
        
            <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            
            <Navbar.Brand href="/">
                <img  src={logoMisionTic} width="100" height="40" alt="Logo" />
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
                <LoginButton setIslogged={ setLogged} setNotLogged={setNotLogged} isLoggedIn={isLoggedIn}/>
                  
                    
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
            </>
            
           
    
        );

     }
    else{
        return(
        
            <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            
            <Navbar.Brand href="/">
                <img  src={logoMisionTic} width="100" height="40" alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                
                </Nav>
                <Nav>
                <Nav.Link href="#deets">DevTeams1</Nav.Link>
                <Nav.Link  href="">
                <LoginButton  setIslogged={ setLogged} setNotLogged={setNotLogged} isLoggedIn={isLoggedIn}/>
                  
                    
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
            </>
            
           
    
        );
    }
        
       

    
        
    
    
    
}

export default NavBarProject;