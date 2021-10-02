import Table from 'react-bootstrap/Table'

const Admin = () => {

    const user_table = [
        {
            Nombre: "Esteban",
            Apellido: "Salamanca Vasquez",
            Rol: "1",
            Estado: 1,
            Fecha_creacion: "2021/01/15"
        },
        {
            Nombre: "Esteban",
            Apellido: "Salamanca Vasquez",
            Rol: "1",
            Estado: 1,
            Fecha_creacion: "2021/01/15"
        },
        {
            Nombre: "Esteban",
            Apellido: "Salamanca Vasquez",
            Rol: "1",
            Estado: 1,
            Fecha_creacion: "2021/01/15"
        },
        {
            Nombre: "Esteban",
            Apellido: "Salamanca Vasquez",
            Rol: "1",
            Estado: 1,
            Fecha_creacion: "2021/01/15"
        },
        {
            Nombre: "Esteban",
            Apellido: "Salamanca Vasquez",
            Rol: "1",
            Estado: 1,
            Fecha_creacion: "2021/01/15"
        },
    ]
    return (
    <div>
        <h1 className="text-center mt-4">Administracion de Usuarios</h1>
        <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>

    )
}

export default Admin;