import React, { useReducer , useState} from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';

import "./crearVenta.css";

const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value
    }
   }




const FormularioVenta = ()=>{

    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);
    const handleSubmit = event => {
      event.preventDefault();
      setSubmitting(true);
      
      setTimeout(() => {
        setSubmitting(false);
      },3000)
    }
  
    const handleChange = event => {
      const isCheckbox = event.target.type === 'checkbox';
      setFormData({
        name: event.target.name,
        value: isCheckbox ? event.target.checked : event.target.value,
      });
    }

    return(
        <div className="wrapper"
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            {submitting &&
                <div>
                    You are submitting the following:
                    <ul>
                        {Object.entries(formData).map(([name, value]) => (
                            <li key={name}><strong>{name}</strong>:{value.toString()}</li>
                        ))}
                    </ul>
                </div>
            }
            <Form onSubmit={handleSubmit}>
            <fieldset disabled={submitting}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridNombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control 
                        type="Nombre" 
                        placeholder="Ingrese su nombre" 
                        onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridApellido">
                        <Form.Label>Apellidos</Form.Label>
                        <Form.Control 
                        type="Apellidos" 
                        placeholder="Ingrese sus apellidos" 
                        onChange={handleChange}
                        />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridCorreoElectronico">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                    placeholder="usuario@email.com" 
                    onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridNoDocID">
                    <Form.Label>Número de documento de identidad</Form.Label>
                    <Form.Control 
                    placeholder="1234567890" 
                    onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridDireccion">
                    <Form.Label>Dirección de envio</Form.Label>
                    <Form.Control 
                    placeholder="Calle 12 #34-56 Casa 79" 
                    onChange={handleChange}
                    />
                </Form.Group>

                <Row className="mb-3">
                    
                    <Form.Group as={Col} controlId="formGridProducto">
                    <Form.Label>Producto</Form.Label>
                    <Form.Select 
                    defaultValue="Seleccione producto..."
                    onChange={handleChange}
                    >
                        <option value="">--Seleccione un producto--</option>
                        <option value="Pala">Pala</option>
                        <option value="Martillo">Martillo</option>
                        <option value="Taladro">Taladro</option>
                        <option value="Serrucho">Serrucho</option>
                    </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCantidad">
                    <Form.Label>Cantidad</Form.Label>
                    <Form.Control
                    onChange={handleChange}
                    />
                    </Form.Group>
                </Row>


            </fieldset>

                <Button 
                variant="primary" 
                type="submit"
                disabled={submitting}
                >
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default FormularioVenta;