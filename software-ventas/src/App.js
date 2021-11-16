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
import callApi from './api';

import CrearProducto from "./GestionProductos/Pages/CrearPro";
//import GestorProductos from "./productos/pages/Gestion";
//import EditarProducto from "./productos/pages/EditarProducto";

import {BrowserRouter as Router,
  Route,
  Switch,
  // eslint-disable-next-line no-unused-vars
  Redirect,
} from "react-router-dom";


function App() {
  const [logged, setLogged] = useState(false);
  const [carrito, setCarrito] = useState([]);
  const [productos, setProductos] = useState([]);
  const [ventas, setVentas] = useState([]);
  const [usuarios, setUsuarios] = useState([]);


  //useEffect(() => {
  //  const fetchData = async () => {
  //    const response = await callApi();
  //    setProductos(response);
      
      
  //  };

  //  fetchData();
 // }, []);

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
  );
} 
 

export default App;
