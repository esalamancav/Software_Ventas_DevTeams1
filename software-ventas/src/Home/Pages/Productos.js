import './Productos.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import NavBarProject from '../Components/NavBarProject';
import Button from 'react-bootstrap/Button'
import Container  from 'react-bootstrap/Container';
const Productos = () => {
    return(
        
        <>
        <header><NavBarProject/></header>
        <Container className="col-6">
        <h1>Gestión de Productos</h1>
       
  <div class="container">
  <div class="row align-items-start">
    <div class="col">
    <Form.Group className="mb-3" controlId="formBasicPassword">
    
    <Form.Control type="code" placeholder="Escriba el codigo del producto" />
   </Form.Group>
    </div>
    <div class="col">
       
    <Button variant="primary" type="submit">
       Buscar
       </Button>
       
    </div>
    
  </div>
  
 
</div>
       
        </Container>
     
        
        </>
    );
}
export default Productos;