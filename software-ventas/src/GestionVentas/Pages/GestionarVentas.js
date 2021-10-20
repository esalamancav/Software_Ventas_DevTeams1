import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-bootstrap-icons';
//import "./App.css";

import {
  Table,
  Button,
  Container,
  Modal,
  FormGroup,
} from "react-bootstrap"

//import {ModalHeader} from "reactstrap";

const ventas_table = [
  {
    id: 1,
    Descripcion: "Cerveza",
    Cantidad: 1,
    Valor: "3500",
    Estado: "En proceso",
    Fecha_venta: "2021/10/15"
  },
  {
    id: 2,
    Descripcion: "Ron",
    Cantidad: 1,
    Valor: "120000",
    Estado: "En proceso",
    Fecha_venta: "2021/10/15"
  },
  {
    id: 3,
    Descripcion: "Aguardiente",
    Cantidad: 1,
    Valor: "100000",
    Estado: "En proceso",
    Fecha_venta: "2021/10/15"
  },
  {
    id: 4,
    Descripcion: "Tequila",
    Cantidad: 1,
    Valor: "250000",
    Estado: "En proceso",
    Fecha_venta: "2021/10/15"
  },


     
  ]
  
class GestionarVentas extends React.Component {

  state = {
    ventas_table: ventas_table,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      Descripcion: "",
      Cantidad: "",
      Valor: "",
      Estado: "",
      Fecha_venta: "",
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
    var arreglo = this.state.ventas_table;
    arreglo.map((registro) => {
      if (dato.id === registro.id) {
        arreglo[contador].Descripcion = dato.Descripcion;
        arreglo[contador].Cantidad = dato.cantidad;
        arreglo[contador].Valor = dato.Rol;
        arreglo[contador].Estado = dato.Estado;
      }
      contador++;
    });
    this.setState({ ventas_table: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
    if (opcion === true) {
      var contador = 0;
      var arreglo = this.state.ventas_table;
      arreglo.map((registro) => {
        if (dato.id === registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ ventas_table: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.ventas_table.length+1;
    var lista= this.state.ventas_table;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, ventas_table: lista });
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
    return (
    <div>
        <h1 className="text-center mt-4 mb-4">Gestión de ventas</h1>
        <Container>
        <br />
          <div className="barraBusqueda">
            <input
              type="text"
              placeholder="Buscar"
              className="textField"
              name="busqueda"
              value={this.state.busqueda}
              onChange={this.onChange}
            />
            <button type="button" className="btnBuscar" /*onClick={onClear}*/>
              {" "}
              <i class="bi bi-search"></i>
            </button>
          </div>
          <br />
          <br />
        <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>id</th>
            <th>Descripcion</th>
            <th>Cantidad</th>
            <th>Valor</th>
            <th>Estado</th>
            <th>Fecha_Venta</th>
            <th>Acción</th>
          </tr>
        </thead>

        <tbody>
              {this.state.ventas_table.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.Descripcion}</td>
                  <td>{dato.Cantidad}</td>
                  <td>{dato.Valor}</td>
                  <td>{dato.Estado}</td>
                  <td>{dato.Fecha_venta}</td>
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
           <div><h3>Editar Registro</h3></div>
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
              Descripcion: 
              </label>
              <input
                className="form-control"
                name="Nombre"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Nombre}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
              Cantidad: 
              </label>
              <input
                className="form-control"
                name="Apellido"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Apellido}
              />
            </FormGroup>
            <FormGroup>
              <label>
                valor: 
              </label>
              <input
                className="form-control"
                name="Rol"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Rol}
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

export default GestionarVentas;