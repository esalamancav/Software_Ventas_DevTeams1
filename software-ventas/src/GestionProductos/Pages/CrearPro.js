import { Container, Row, Col, Alert } from "react-bootstrap";
import Formulario from '../Components/Formulario';
import './CrearPro.css';
import api from "../../api";
import React, { useState } from "react";



 

const CrearPro= ({ productos, setProductos }) => {

   const [error, setError] = useState();
   const [success, setSuccess] = useState();

  const [newProduct, setNewProduct] = useState({
    Descripcion: "",
    Valor: 0,
    Estado: "",

  });

  const handleChange = (event) => {
    setNewProduct({ ...newProduct, [event.target.name]: event.target.value });
  };

  const handleClick = async () => {
    const apiResponse = await api.products.create(newProduct);
    console.log(newProduct)
    if (apiResponse.err) {
      setError(apiResponse.err.message);
      console.log(apiResponse.err);
    } else {
      setSuccess(apiResponse);
      setProductos([...productos, newProduct]);
      //history.push("/");
    }
  };


    return(
        
      <> 
      <React.Fragment>
         <Container className="col-6">
            <h1>Crear Producto</h1>
            <Row className="d-flex justify-content-center align-items-center">
            <Col xs={6}>
               {error && <Alert variant="danger">{error}</Alert>}
               {success && <Alert variant="success">{success}</Alert>}
               <Formulario
               handleChange={handleChange}
               handleClick={handleClick}
               formValue={newProduct}
               />
            </Col>
            </Row>
         </Container>
      </React.Fragment>
     
        
      </>
    );
}
export default CrearPro;