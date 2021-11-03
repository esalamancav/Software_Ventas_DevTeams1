import React from "react";
import { GoogleLogout } from 'react-google-login';



export const LogoutButton = () =>{
    const logout = (response) => {
        
        localStorage.removeItem("token");
      }
    return   <GoogleLogout
    clientId="518565057086-173mf1nl3v1sucqptik3arl0q6r6oop2.apps.googleusercontent.com"
    buttonText="Logout"
    onLogoutSuccess={logout}
  >
  </GoogleLogout>
    
}