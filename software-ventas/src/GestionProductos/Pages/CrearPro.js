import Container  from 'react-bootstrap/Container';
import Formulario from '../Components/Formulario';


const CrearPro= () => {
    return(
        
     <>  
     <Container className="col-6">
        <h1>Crear Producto</h1>
     <div className="contenedor">
      <Formulario/>
      </div>
         </Container> 
      
       
        
       </>
    );
}
export default CrearPro;