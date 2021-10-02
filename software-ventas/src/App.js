import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Home} from "./Home/Pages/Home";
import Admin from "./GestionUsuarios/pages/Admin";
import {NavBarProject} from "./Home/Components/NavBarProject";
import {BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <NavBarProject />
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/Admin" exact>
          <Admin/>
        </Route> 
      </Switch>
    </Router>
      
  );
}

export default App;
