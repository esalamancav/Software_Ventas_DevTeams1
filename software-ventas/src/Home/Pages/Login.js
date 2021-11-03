import React, { useState } from "react";
import ReactDOM, { render } from 'react-dom';
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';


export const LoginButton = () =>{
  const [isLoggedIn,setIsLoggedIn]=useState(false);

  const responseGoogle = (response) => {
    console.log(response);
    localStorage.setItem("token",response.tokenId);
    setIsLoggedIn(true);
  }
  const error = (response) => {
    console.log("Error de acceso");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  }
  const logout = (response) => {
    
    console.clear();
    setIsLoggedIn(false);
  }
  return (isLoggedIn,
    <div>
    {isLoggedIn ?
    <GoogleLogout
    clientId="518565057086-173mf1nl3v1sucqptik3arl0q6r6oop2.apps.googleusercontent.com"
    buttonText="Salir"
    onLogoutSuccess={logout}
  >
  </GoogleLogout>
  
  
 : <GoogleLogin
 clientId="518565057086-173mf1nl3v1sucqptik3arl0q6r6oop2.apps.googleusercontent.com"
 buttonText="Acceder"
 onSuccess={responseGoogle}
 onFailure={error}
 cookiePolicy={'single_host_origin'}
/>
}
  </div>);
}
export default LoginButton;