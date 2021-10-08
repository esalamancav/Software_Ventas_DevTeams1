import { Formik } from 'formik';
import React, {useState} from 'react';


const Formulario = () =>{
    const[formularioEnviado,cambiarFormularioEnviado]=useState(false);
  return(
  <> <Formik
    initialValues={{
      ID: 0,
      Descripcion: '',
      Valor:0,
      Estado:''



    }}
     onSubmit={(valores,{resetForm})=>{
         resetForm();
         console.log('Producto creado');
         cambiarFormularioEnviado(true);
         setTimeout(()=>cambiarFormularioEnviado(false),4000);
     }} 
  >

      {({values,handleSubmit,handleChange})=>(

 <form className="formulario" onSubmit={handleSubmit}>
 <div>
 <label htmlFor="ID"> ID</label>
 <input
        type="number" 
        id="ID" 
        name="ID" 
        value={values.ID}
        onChange={handleChange}

/>
</div>
<div>
<label htmlFor="Descripción"> Descripción</label>
 <input 
       type="text"
       id="Descripcion" 
       name="Descripcion"  
       value={values.Descripcion}
       onChange={handleChange}
       

 />
</div>
<div>
<label htmlFor="Valor"> Valor</label>
 <input 
        type="number" 
        id="Valor" 
        name="Valor"  
        value={values.Valor}
        onChange={handleChange}

/>
</div>
<div>
<label htmlFor="Estado"> Estado</label>
 <input
       type="text"
       id="Estado" 
       name="Estado"  
       value={values.Estado}
       onChange={handleChange}
       

/>
</div>
<button type="submit">Guardar </button>
{formularioEnviado && <p className="exito"> Producto creado con exito</p>}

</form> 

      )}
     
  </Formik>

     

  </>


  ); 
} 
export default Formulario;