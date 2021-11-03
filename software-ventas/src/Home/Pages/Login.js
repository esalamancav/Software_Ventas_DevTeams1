import React from "react";
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
var islogged;
export const LoginButton = () =>{

  const responseGoogle = (response) => {
    console.log(response);
    localStorage.setItem("token",response.tokenId);
  }
  const error = (response) => {
    console.log("Error de acceso");
    localStorage.removeItem("token");
  }
  return (
    <GoogleLogin
    clientId="518565057086-173mf1nl3v1sucqptik3arl0q6r6oop2.apps.googleusercontent.com"
    buttonText="Acceder"
    onSuccess={responseGoogle}
    onFailure={error}
    cookiePolicy={'single_host_origin'}
  />
  );
}
export default LoginButton;