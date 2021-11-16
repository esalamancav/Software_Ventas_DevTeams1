import { Formik } from 'formik';
import React, {useState} from 'react';

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


const Formulario = ({ handleChange, handleClick, categorias, formValue }) =>{
    const[formularioEnviado,cambiarFormularioEnviado]=useState(false);
  return(
  <> 
  <Form>
      <Form.Group className="mb-3">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control
          type="text"
          name="Descripcion"
          onChange={handleChange}
          value={formValue.Descripcion}
        />
      </Form.Group>


      <Form.Group className="mb-3">
        <Form.Label>Valor</Form.Label>
        <Form.Control
          type="number"
          name="Valor"
          onChange={handleChange}
          value={formValue.Valor}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Estado</Form.Label>
        <Form.Control
          type="text"
          name="Estado"
          onChange={handleChange}
          value={formValue.Estado}
        />
      </Form.Group>

      <Button type="button" variant="danger">
        Cancelar
      </Button>
      <Button
        onClick={handleClick}
        type="button"
        variant="danger"
        className="float-end"
      >
        Guardar
      </Button>
    </Form>
  
  
  
  </>


  ); 
} 
export default Formulario;