import React from "react";
import {Form, Button, Row, Col} from 'react-bootstrap';
import "./crearVenta.css";



const CrearVenta = ()=>{
    return(
        <div className="wrapper"
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Form>
            <fieldset>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridNombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="Nombre" placeholder="Ingrese su nombre" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridApellido">
                        <Form.Label>Apellidos</Form.Label>
                        <Form.Control type="Apellidos" placeholder="Ingrese sus apellidos" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridCorreoElectronico">
                    <Form.Label>Email</Form.Label>
                    <Form.Control placeholder="usuario@email.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridNoDocID">
                    <Form.Label>Número de documento de identidad</Form.Label>
                    <Form.Control placeholder="1234567890" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridDireccion">
                    <Form.Label>Dirección de envio</Form.Label>
                    <Form.Control placeholder="Calle 12 #34-56 Casa 79" />
                </Form.Group>

                <Row className="mb-3">
                    
                    <Form.Group as={Col} controlId="formGridProducto">
                    <Form.Label>Producto</Form.Label>
                    <Form.Select defaultValue="Seleccione producto...">
                        <option>Pala</option>
                        <option>Martillo</option>
                        <option>Taladro</option>
                        <option>Serrucho</option>
                    </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCantidad">
                    <Form.Label>Cantidad</Form.Label>
                    <Form.Control/>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

            </fieldset>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default CrearVenta;