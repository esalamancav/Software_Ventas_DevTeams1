
const editar = (dato) => {
return(
    <>
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
    </>
);
}
export default editar;