import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./Home/Pages/Home";
import Productos from './GestionProductos/Pages/Productos';
import Admin from "./GestionUsuarios/pages/Admin";
import CrearPro from './GestionProductos/Pages/CrearPro';
import NavBarProject from "./Home/Components/NavBarProject";
import CrearVenta from "./GestionVentas/Pages/crearVenta";
import GestionarVentas from "./GestionVentas/Pages/GestionarVentas";
import LoginButton from './Home/Pages/Login';
import { useEffect } from 'react';
import {BrowserRouter as Router,
  Route,
  Switch,
  // eslint-disable-next-line no-unused-vars
  Redirect,
} from "react-router-dom";


const App= ()=> {
 
 
  return (
    
    <Router>
      <NavBarProject  />
      
      <Switch>
       
    

      <Route path="/crearPro" exact>
          <CrearPro/>
        </Route> 
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/Productos" exact>
          <Productos/>
        </Route>
        <Route path="/Admin" exact>
          <Admin/>
        </Route>
        <Route path="/CrearVenta" exact>
          <CrearVenta/>
        </Route>
        <Route path="/GestionarVentas" exact>
          <GestionarVentas/>
        </Route>
      
      </Switch>

    </Router>
  )

}

export default App;
