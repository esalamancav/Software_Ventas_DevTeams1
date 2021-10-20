import './Productos.css';
import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
  Table,
  Button,
  Container,
  Modal,
  FormGroup,
  Form,
} from "react-bootstrap"

const product_table = [
  {
    id: 1,
    Producto: "Cerveza",
    Descripcion: "bebida alcohólica",
    Valor: "3500",
    Estado: "1",
 
  },
  {
    id: 2,
    Producto: "Ron",
    Descripcion: "bebida_alcohólica",
    Valor: "3500",
    Estado: "1",
  },
  {
    id: 3,
    Producto: "Aguardiente",
    Descripcion: "bebida alcohólica",
    Valor: "3500",
    Estado: "1",
  },
  {
    id: 4,
    Producto: "Tequila",
    Descripcion: "bebida alcohólica",
    Valor: "3500",
    Estado: "1",
  },

]

class Productos extends React.Component {
  state = {
    product_table: product_table,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      Producto: "",
      Descripcion: "",
      Valor: "",
      Estado: "",
    },
  };
  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ 
      modalActualizar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.product_table;
    arreglo.map((registro) => {
      if (dato.id === registro.id) {
        arreglo[contador].Producto = dato.Producto;
        arreglo[contador].Descripcion = dato.Descripcion;
        arreglo[contador].Valor = dato.Valor;
        arreglo[contador].Estado = dato.Estado;
      }
      contador++;
    });
    this.setState({ product_table: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
    if (opcion === true) {
      var contador = 0;
      var arreglo = this.state.product_table;
      arreglo.map((registro) => {
        if (dato.id === registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ product_table: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.product_table.length+1;
    var lista= this.state.product_table;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, product_table: lista });
  }
  
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

render() {
    return(
    <div>    
      
        <Container className="col-6">
        <h1 className="text-center mt-4 mb-4">Gestión de Productos</h1>
       
  <div class="container">
  <div class="row align-items-start">
    <div class="col">
    <Form.Group className="mb-5" controlId="formBasicPassword">
    
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
       
<Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>id</th>
            <th>Producto</th>
            <th>Descripcion</th>
            <th>Valor</th>
            <th>Estado</th>
            <th>Acción</th>
          </tr>
        </thead>

        <tbody>
              {this.state.product_table.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.Producto}</td>
                  <td>{dato.Descripcion}</td>
                  <td>{dato.Valor}</td>
                  <td>{dato.Estado}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
                  </td>
                </tr>
              ))}
            </tbody>

              </Table>
      </Container>
      <Modal show={this.state.modalActualizar}
        //onHide={false}
        backdrop="static"
        keyboard={false}
        >
          <Modal.Header>
           <div><h3>Editar Producto</h3></div>
          </Modal.Header>

          <Modal.Body>
            <FormGroup>
              <label>
               Id:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
              Producto: 
              </label>
              <input
                className="form-control"
                name="Producto"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Producto}
              />
            </FormGroup>

            <FormGroup>
              <label>
              Descripcion: 
              </label>
              <input
                className="form-control"
                name="Descripcion"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Descripcion}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Valor: 
              </label>
              <input
                className="form-control"
                name="Valor"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Valor}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Estado: 
              </label>
              <input
                className="form-control"
                name="Estado"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Estado}
              />
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            
          </Modal.Footer>
        </Modal>
     

  </div>
    )
}
}

export default Productos;