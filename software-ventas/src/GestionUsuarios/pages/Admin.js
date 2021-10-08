
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import "./App.css";

import {
  Table,
  Button,
  Container,
  Modal,
  FormGroup,
} from "react-bootstrap"

//import {ModalHeader} from "reactstrap";

const user_table = [
  {
    id: 1,
    Nombre: "Esteban",
    Apellido: "Salamanca Vasquez",
    Rol: "1",
    Estado: 1,
    Fecha_creacion: "2021/01/15"
  },
  {
    id: 2, 
    Nombre: "Esteban",
    Apellido: "Salamanca Vasquez",
    Rol: "1",
    Estado: 1,
    Fecha_creacion: "2021/01/15"
  },
  {
    id: 3,
    Nombre: "Esteban",
    Apellido: "Salamanca Vasquez",
    Rol: "1",
    Estado: 1,
    Fecha_creacion: "2021/01/15"
  },
  {
    id: 4,
    Nombre: "Esteban",
    Apellido: "Salamanca Vasquez",
    Rol: "1",
    Estado: 1,
    Fecha_creacion: "2021/01/15"
  },


     
  ]
  
class Admin extends React.Component {

  state = {
    user_table: user_table,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      Nombre: "",
      Apellido: "",
      Rol: "",
      Estado: "",
      Fecha_creacion: "",
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

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.user_table;
    arreglo.map((registro) => {
      if (dato.id === registro.id) {
        arreglo[contador].Nombre = dato.Nombre;
        arreglo[contador].Apellido = dato.Apellido;
        arreglo[contador].Rol = dato.Rol;
        arreglo[contador].Estado = dato.Estado;
      }
      contador++;
    });
    this.setState({ user_table: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
    if (opcion === true) {
      var contador = 0;
      var arreglo = this.state.user_table;
      arreglo.map((registro) => {
        if (dato.id === registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ user_table: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.user_table.length+1;
    var lista= this.state.user_table;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, user_table: lista });
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
        <h1 className="text-center mt-4 mb-4">Administracion de Usuarios</h1>
        <Container>
        <br />
          <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear</Button>
          <br />
          <br />
        <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Rol</th>
            <th>Estado</th>
            <th>fecha_creación</th>
            <th>Acción</th>
          </tr>
        </thead>

        <tbody>
              {this.state.user_table.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.Nombre}</td>
                  <td>{dato.Apellido}</td>
                  <td>{dato.Rol}</td>
                  <td>{dato.Estado}</td>
                  <td>{dato.Fecha_creacion}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                  
                    >
                      Editar
                    </Button>{" "}
                    <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
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
                Nombre: 
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
                Apellido: 
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
                Rol: 
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
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.modalInsertar}
        //onHide={false}
        backdrop="static"
        keyboard={false}>
          <Modal.Header>
           <div><h3>Insertar Usuario</h3></div>
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
                value={this.state.user_table.length+1}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Nombre: 
              </label>
              <input
                className="form-control"
                name="Nombre"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Apellido: 
              </label>
              <input
                className="form-control"
                name="Apellido"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Rol: 
              </label>
              <input
                className="form-control"
                name="Rol"
                type="text"
                onChange={this.handleChange}
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
              />
            </FormGroup>
          </Modal.Body>

          <Modal.Footer>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </Modal.Footer>
        </Modal>

    </div>

    )
  }
}

export default Admin;